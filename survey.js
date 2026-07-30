// Medical Education Survey JS Handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('pgy-survey-form');
  const successCard = document.getElementById('success-card');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const feedbackBest = document.getElementById('feedback-best').value.trim();
      const feedbackSuggest = document.getElementById('feedback-suggest').value.trim();

      const ratings = {};
      for (let i = 1; i <= 13; i++) {
        const selected = form.querySelector(`input[name="q${i}"]:checked`);
        ratings[`q${i}`] = selected ? selected.value : null;
      }

      const surveyEntry = {
        timestamp: new Date().toISOString(),
        ratings,
        feedbackBest,
        feedbackSuggest
      };

      // Save to local storage for instructor summary
      try {
        const existing = JSON.parse(localStorage.getItem('disaster_survey_responses') || '[]');
        existing.push(surveyEntry);
        localStorage.setItem('disaster_survey_responses', JSON.stringify(existing));
      } catch(err) {
        console.error('Error saving survey response:', err);
      }

      form.classList.add('hidden');
      successCard.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
