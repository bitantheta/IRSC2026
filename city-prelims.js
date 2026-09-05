const cityPrelimsForm = document.getElementById("city-prelims-form");
const quizStatus = document.getElementById("quiz-status");

if (cityPrelimsForm) {
  if (cityPrelimsForm.dataset.submissionsClosed === "true") {
    cityPrelimsForm.querySelectorAll("input, textarea, button").forEach((field) => {
      field.disabled = true;
    });
    if (quizStatus) quizStatus.textContent = "Responses are no longer being accepted.";
  }

  cityPrelimsForm.querySelectorAll(".quiz-questions textarea, input[name='consent']").forEach((field) => {
    field.removeAttribute("required");
  });

  cityPrelimsForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (cityPrelimsForm.dataset.submissionsClosed === "true") {
      quizStatus.textContent = "Responses are no longer being accepted.";
      return;
    }

    if (!cityPrelimsForm.checkValidity()) {
      cityPrelimsForm.reportValidity();
      quizStatus.textContent = "Please complete every required field before submitting.";
      return;
    }

    const endpoint = cityPrelimsForm.dataset.submissionEndpoint;
    if (!endpoint) {
      quizStatus.textContent = "Submissions are not open yet. Please check with the organisers before submitting.";
      return;
    }

    const button = cityPrelimsForm.querySelector("button[type='submit']");
    const payload = Object.fromEntries(new FormData(cityPrelimsForm).entries());
    payload.submitted_at = new Date().toISOString();
    button.disabled = true;
    quizStatus.textContent = "Submitting your responses…";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Submission failed");
      cityPrelimsForm.reset();
      window.location.assign("./qoutuhol.html");
    } catch (error) {
      quizStatus.textContent = "We could not submit your responses. Please check your connection and try again.";
    } finally {
      button.disabled = false;
    }
  });
}
