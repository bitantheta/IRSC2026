const speakerProfiles = {
  chaulia: { name: "Dr. Sreeram Sundar Chaulia", image: "./assets/images/speakers/sreeram-chaulia.png", bio: ["Dr. Sreeram Sundar Chaulia is Professor and Dean at the Jindal School of International Affairs, O.P. Jindal Global University. His areas of specialisation include diplomacy, foreign policy, comparative politics, international political economy, international organisations, armed conflict, humanitarian practices, and contemporary world history.", "His writings have appeared in journals across the USA, UK, Australia, Canada, and India. He is the contributing editor of People Who Influenced the World Over the Past 100 Years (2005), author of numerous books, and most recently published Friends: India's Closest Strategic Partners (2024).", "Professor Chaulia writes on international issues for Dainik Jagran and Hindustan Times, has contributed to major Indian and international publications, hosts the weekly Indian Diplomacy programme on DD India, and previously worked as an international civilian peacekeeper in eastern Sri Lanka and the southern Philippines."] },
  parmar: { name: "Captain S. S. Parmar", image: "./assets/images/speakers/ss-parmar.png", bio: ["An alumnus of India's National Defence Academy and Defence Services Staff College, Captain S. S. Parmar was commissioned into the Indian Navy on 1 July 1987 and retired on 30 June 2023.", "He served as a Seaking pilot, commanded INS Bedi and INS Sharda, and led the INS 330 squadron. He represented the Indian Navy at the first international HOSTAC conference in Norfolk, USA, in 2008, contributed to India's 2015 maritime security strategy as Director (Strategy), and participated in the 1991 Antarctic Expedition.", "He is now a Distinguished Fellow at the United Service Institution of India, the Council of Strategic and Defence Research, and the Australia India Institute."] },
  atul: { name: "Dr. Atul Mishra", image: "./assets/images/speakers/atul-mishra.png", bio: ["Dr. Atul Mishra is Associate Professor and Head of the Department of International Relations and Governance Studies at Shiv Nadar University, Delhi-NCR. His expertise includes IR theory, Indian foreign policy, modern Indian international thought, South Asian international relations, and contemporary international affairs.", "His scholarship explores theoretical traditions in the non-West, postcolonialism, realism, and liberalism. His books include The Sovereign Lives of India and Pakistan (2021) and Nuclear South Asia: Keywords and Concepts (2014).", "Dr. Mishra regularly lectures at the Sushma Swaraj Institute of Foreign Service, Ministry of External Affairs. He has written for The Hindu, The Indian Express, and Dawn, and is a columnist for Hindustan Times."] },
  datta: { name: "Professor (Dr.) Sreeradha Datta", image: "./assets/images/speakers/sreeradha-datta.png", bio: ["Professor (Dr.) Sreeradha Datta is Professor at the Jindal School of International Affairs, O.P. Jindal Global University, and a Non-Resident Senior Fellow at the Indian Institute of South Asian Studies, National University of Singapore.", "With a PhD from Jawaharlal Nehru University, she has served as Director of the Maulana Abul Kalam Azad Institute of Asian Studies under the Government of India and held senior research positions at the Vivekananda International Foundation and the Institute for Defence Studies and Analyses. Her research includes India's foreign policy, regionalism, and cross-border issues.", "Specialising in South and Southeast Asian studies, Professor Datta has authored and edited more than ten books, including Bangladesh on a New Journey: Moving Beyond Regional Identity (2024), and has published more than 170 articles."] },
  vivek: { name: "Dr. Vivek Mishra", image: "./assets/images/speakers/vivek-mishra.png", bio: ["Dr. Vivek Mishra is Deputy Director of the Strategic Studies Programme at Observer Research Foundation, New Delhi. His research focuses on US foreign policy, the US role in the Indian Ocean and Indo-Pacific, South Asian security, Indo-US defence relations, and great-power competition.", "He holds a PhD and MPhil in International Relations from Jawaharlal Nehru University and has served as a Research Fellow at the Indian Council of World Affairs and an Assistant Professor at the National Institute of Advanced Studies. He was a Fulbright-Nehru Visiting Scholar at Columbia University in 2015-16.", "His work examines India's foreign policy, Indo-Pacific geopolitics, maritime security, and India-US relations. His recent book, American Maritime Strategy in the Indian Ocean: Dominance, Diffusion, Adaptation, was published by Routledge in 2026."] },
  durai: { name: "Ambassador (Retd.) Suchitra Durai", image: "./assets/images/speakers/suchitra-durai.png", bio: ["Ambassador (Retd.) Suchitra Durai is a distinguished Indian diplomat and former Ambassador of India to Thailand, where she served from November 2018 to September 2022. Her Ministry of External Affairs roles include Joint Secretary for Sri Lanka, Maldives, and the Indian Ocean Region.", "As Ambassador to Thailand, she helped strengthen India-Thailand cooperation in political, economic, cultural, and strategic spheres. She has been closely engaged with discussions of India's maritime vision, the Indo-Pacific, SAGAR, and MAHASAGAR.", "Ambassador Durai continues to contribute to academic and policy discussions on Indian foreign policy, maritime security, the Indo-Pacific, and India's engagement with Southeast Asia and the wider Indian Ocean region."] },
  behera: { name: "Prof. Navnita C. Behera", image: "./assets/images/speakers/navnita-behera.png", bio: ["Prof. Navnita C. Behera is a Senior Professor in the Department of Political Science at the University of Delhi and a renowned scholar of International Relations. Her areas of expertise include IR theory, politics of knowledge production, pluriversal relationality, critical pedagogies in IR, and conflict and political violence in South Asia, particularly Kashmir.", "She has been a Professor at the University of Delhi since 2009 and was Head of the Department from 2015 to 2018. Previously, she was Professor at the Nelson Mandela Centre for Peace and Conflict Resolution, Jamia Millia Islamia University.", "Professor Behera served as Vice-President of the International Studies Association (2019-2020), was nominated ICCR Chair in Indian Studies at the University of Pittsburgh, and has contributed to major international research projects and publications, including India Engages the World."] },
  tourangbam: { name: "Dr. Monish Tourangbam", image: "./assets/images/speakers/monish-tourangbam.png", bio: ["Dr. Monish Tourangbam is a Fellow at Chintan Research Foundation. His work covers the United States, including US foreign policy orientations, grand strategy, domestic politics, and regional and bilateral engagements.", "His research also addresses Indo-Pacific geopolitics, hegemony and counter-hegemony in international relations, shifts in global order, and South-Southeast Asian regional security dynamics.", "Previously, he was Honorary Director at the Kalinga Institute of Indo-Pacific Studies, Associate Editor at India Quarterly, Associate Professor at Amity University, Senior Assistant Professor at Manipal Academy of Higher Education, and Associate Fellow at Observer Research Foundation. He has also been a Visiting Faculty member at the University of Cincinnati and a Visiting Fellow at the Stimson Center."] },
  mazumdar: { name: "Ambassador Jaideep Mazumdar", image: "./assets/images/speakers/jaideep-mazumdar.png", bio: ["Ambassador Jaideep Mazumdar is a senior Indian diplomat from the 1989 batch of the Indian Foreign Service. Born in Shillong, Meghalaya, he holds degrees in Economics and Business Administration and is fluent in Assamese, Bengali, English, Hindi, and Chinese.", "Across more than three decades in diplomacy, he has served as Chief of Protocol, Head of the Southern Division, and Deputy Secretary in the Prime Minister's Office, handling foreign affairs, defence, security, atomic energy, and space. His overseas assignments include Deputy Chief of Mission in Beijing and Kathmandu, Ambassador to the Philippines, and Ambassador to Austria, Montenegro, and the Holy See.", "Since 2024, he has served as Secretary East in the Ministry of External Affairs, leading India's engagements across East and Southeast Asia and the Indo-Pacific."] }
};

const speakerTrack = document.querySelector(".speaker-track");
const speakerDialog = document.getElementById("speaker-dialog");
const speakerDialogName = document.getElementById("speaker-dialog-name");
const speakerDialogImage = document.getElementById("speaker-dialog-image");
const speakerDialogBio = document.getElementById("speaker-dialog-bio");

if (speakerTrack && !speakerTrack.dataset.duplicated) {
  const originalCards = [...speakerTrack.children];
  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.tabIndex = -1;
    speakerTrack.append(clone);
  });
  speakerTrack.dataset.duplicated = "true";
  const updateLoopWidth = () => {
    const duplicateStart = speakerTrack.children[originalCards.length];
    if (duplicateStart) speakerTrack.style.setProperty("--speaker-loop-width", `${duplicateStart.offsetLeft}px`);
  };
  updateLoopWidth();
  window.addEventListener("resize", updateLoopWidth);
}

speakerTrack?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-speaker]");
  const profile = card && speakerProfiles[card.dataset.speaker];
  if (!profile || !speakerDialog) return;
  speakerDialogName.textContent = profile.name;
  speakerDialogImage.src = profile.image;
  speakerDialogImage.alt = profile.name;
  speakerDialogBio.replaceChildren(...profile.bio.map((paragraph) => {
    const element = document.createElement("p");
    element.textContent = paragraph;
    return element;
  }));
  speakerDialog.showModal();
});

speakerDialog?.querySelector(".speaker-dialog-close")?.addEventListener("click", () => speakerDialog.close());
speakerDialog?.addEventListener("click", (event) => { if (event.target === speakerDialog) speakerDialog.close(); });
