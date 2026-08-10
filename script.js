const menuButton = document.getElementById("mobile-menu-btn");
const navigation = document.querySelector(".top-nav");

function closeMobileNavigation() {
  if (navigation) {
    navigation.classList.remove("open");
  }
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileNavigation));

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 760 && navigation.classList.contains("open") && !navigation.contains(event.target) && event.target !== menuButton) {
      closeMobileNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileNavigation();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMobileNavigation();
    }
  });
}

const convenorDialog = document.getElementById("convenor-dialog");
const convenorDialogTitle = document.getElementById("convenor-dialog-title");
const convenorDialogContent = document.getElementById("convenor-dialog-content");
const convenorMessages = {
  one: {
    title: "Subhajit Naskar | Asst. Professor, Department of International Relations, Jadavpur University, Kolkata",
    content: `Indian Constitution in its articles 14 and 15 promises Equality with legal binding and ensures opportunities without discriminations as normative principles and foundational commitments of the Indian Republic. It sets the tone for the ideals of a democratic nation. The egalitarian visions of Constitution framers under the leadership of Babasaheb Ambedkar has lifted the state from the darkness of prejudice and despicable hierarchies attached to human birth. Imaginations of the radical project of democratic modernity was institutionalized by the constituent assembly. The long walk towards modernity was not an easy task in a deeply gatekept Indian society. As Beneath the spectacle of Indian civilization, lied formidable glorification of humiliations, social exclusion, injustice and archaic ideas of liberty. Needless to say, Indian liberals pushed the narrative of cradle of civilization and cultural exceptionalism by aestheticizing thousands of years violent social past. Cultural supremacy was fused with casteist immoralities to subjugate and sanitise millions of marginaliseds to generate manufactured consent through coercion. The elite privilegeds refusal to reckon with the postcolonial attempts to democratise the idea of Nation remains an unfinished task. Anti colonial Philosopher Frantz Fanon aptly observed, Decolonisation is the putting into practice “The last shall be first and the first last”. The naked truth is, the desire of casteist colonial settlers remains obnoxiously fixated at structural superiority. The discomfort to confront with the anti-democratic realities testifies the quiet love for intergenerational privileges. Championing primordial ironies like Vikshit Bharat and MAGA movement endorses and activates the denials of course correcting the colonial violence and approves Whites and Upper Castes as racially superior and rest as subhumans. The social and moral ruptures that has undergone into framing of Shining India and Vishwaguru can be India’s very own template of Images of Incivilities. Therefore, Finding India a place in global world order may bounce back on its own face while democracy has not taken the social roots, the idea of liberty and equality is countered by the hegemonic brutalities. As the Faculty Convener of The International Relations Scholastic Conclave (IRSC), 2026 Edition, I hope, we may go beyond enthusiastic endorsements of corporatised IR and foster emancipatory approaches to understand State in global politics.`
  },
  two: {
    title: "Shibashis Chatterjee | Professor, Department of International Relations, Jadavpur University, Kolkata",
    content: `It is with profound honor that we welcome Jadavpur University, a distinguished Indian academic institution dedicated to cultivating policy engagement, fostering informed discourse, and advancing critical scholarship in International Relations and Strategic Studies.

The current transformation of international politics clearly shows that strategic autonomy and global realignment are the most effective concepts for comprehension. A multipolar order has taken shape in the wake of unipolarity’s decline, the return of great-power rivalries, a more diffuse distribution of economic and technological might, and the fracturing of global governance. This new order is defined not so much by any stable equilibrium as by the interplay of competitive and cooperative networks.

In such an environment, strategic autonomy has evolved beyond a simple doctrine of non-alignment or policy independence into something far more dynamic. It is the means by which states can safeguard their sovereignty and decision-making prerogatives, expand their partnerships and agency, and all the while sidestep the rigidities of bloc politics. Theoretical lenses offer various ways to read this: for the realist it is about the balance of power and survival; liberal institutionalism points to its function within multilateral bodies and issue-based coalitions; constructivists would stress how identity and history inform foreign policy; and from a critical or postcolonial vantage point it is seen as an assertion of political and epistemic autonomy in the face of entrenched hierarchies.

India's approach to strategic autonomy, characterized by its intricate grand strategy at the intersection of power, development, and normative leadership, warrants consideration beyond mere diplomatic preference. Amid a deep global realignment, what matters is not just India’s adaptation to multipolarity but also the role it plays in shaping its institutional and normative underpinnings. We invite scholars to this conference to put these questions to the test, examining the empirical and theoretical dimensions of India’s bid for influence in a world where such influence is more hotly contested, along with the contradictions and constraints that accompany it.

We are therefore currently in a period of significant global shifts. The complex, multipolar world, along with climate change, unprecedented technological advancements, and evolving economic relationships, presents security challenges and other complexities that require a thorough, multidisciplinary analysis. The IRSC serves as a platform for students, policymakers, practitioners, and scholars to examine these issues from a multidisciplinary perspective and shape India’s global perception in an increasingly interconnected world.

The Conclave has always aimed to bridge the gap between academic practice and public policy, and this year's event will be no exception. Our goal is to encourage evidence-based discussions and exciting ideas originating from different institutions and platforms. We also prioritize mentoring emerging researchers, connecting them with prominent experts to strengthen Indian IR scholarship.

The IRSC, supported this year by the Indian Council of Social Science Research (ICSSR), is a flagship program of the Department of International Relations at Jadavpur University and promotes intellectual openness and methodological diversity. We hope the ensuing discussions at the Conclave will continue beyond the event, inspiring new research and policy ideas on global issues.

The presence of speakers, guests, and participants helps make this Conclave a hub of ideas. We expect three days of productive discussions and lasting academic connections.`
  }
};

if (convenorDialog && convenorDialogTitle && convenorDialogContent) {
  document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", () => {
      const message = convenorMessages[button.dataset.convenor];
      if (!message) return;
      convenorDialogTitle.textContent = message.title;
      convenorDialogContent.textContent = message.content;
      convenorDialog.showModal();
    });
  });

  convenorDialog.querySelector(".dialog-close")?.addEventListener("click", () => convenorDialog.close());
  convenorDialog.addEventListener("click", (event) => {
    if (event.target === convenorDialog) convenorDialog.close();
  });
}

const contactForm = document.querySelector(".contact-form");
const contactFormStatus = document.querySelector(".contact-form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = "IRSC 2026 website enquiry";
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    if (contactFormStatus) {
      contactFormStatus.textContent = "Opening your email app...";
    }

    window.location.href = `mailto:irsc2026@jadavpuruniversity.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const archiveTrack = document.querySelector(".archive-track");

if (archiveTrack && !archiveTrack.dataset.duplicated) {
  const archiveSlides = [...archiveTrack.children];

  archiveSlides.forEach((slide) => {
    const duplicate = slide.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    duplicate.querySelector("img")?.setAttribute("alt", "");
    archiveTrack.append(duplicate);
  });

  archiveTrack.dataset.duplicated = "true";
}

const countdownTarget = new Date("2026-09-08T18:30:00Z");
const countdownDays = document.getElementById("countdown-days");
const countdownHours = document.getElementById("countdown-hours");
const countdownMinutes = document.getElementById("countdown-minutes");
const countdownSeconds = document.getElementById("countdown-seconds");
const countdownKicker = document.querySelector(".countdown-kicker");

function formatCountdownValue(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const remaining = countdownTarget.getTime() - Date.now();

  if (remaining <= 0) {
    if (countdownDays && countdownHours && countdownMinutes && countdownSeconds) {
      countdownDays.textContent = "00";
      countdownHours.textContent = "00";
      countdownMinutes.textContent = "00";
      countdownSeconds.textContent = "00";
    }
    if (countdownKicker) {
      countdownKicker.textContent = "Conference is live";
    }
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (countdownDays) countdownDays.textContent = formatCountdownValue(days);
  if (countdownHours) countdownHours.textContent = formatCountdownValue(hours);
  if (countdownMinutes) countdownMinutes.textContent = formatCountdownValue(minutes);
  if (countdownSeconds) countdownSeconds.textContent = formatCountdownValue(seconds);
}

if (countdownDays && countdownHours && countdownMinutes && countdownSeconds) {
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}
