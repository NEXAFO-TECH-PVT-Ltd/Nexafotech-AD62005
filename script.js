const employee = {
  name: "ABISHEK ARUCHAMY",
  shortName: "ABISHEK",
  role: "CHIEF EXECUTIVE OFFICER",
  bio: "**ABISHEK , CHIEF OPERATING OFFICER,** is the driving force behind the organization's vision and long-term growth. With a passion for innovation, strong leadership, and a commitment to excellence, he has built the company on the values of integrity, trust, and continuous progress. His forward-thinking approach and dedication to empowering people continue to shape the organization's future, inspiring teams to create meaningful impact and deliver lasting value.",
  image: "AD-62005.png",
  quote: "Execute with purpose. Lead with discipline. Deliver with excellence.",
  details: {
    department: "CHIEF OPERATING OFFICER",
    email: "abishekaruchamy6660@gmail.com",
    phone: "9659606660636"
  },
  socials: [
    { name: "Twitter", url: "https://x.com/Abishekwj" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abishek-aruchamy-6b4192384?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Instagram", url: "https://www.instagram.com/abiii.calx?igsh=MWphOWRyNjU1Zm13Yg==" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Populate hero section
  document.getElementById('hero-img').src = employee.image;
  document.getElementById('hero-img').alt = employee.name;
  document.getElementById('hero-name').textContent = employee.name;
  document.getElementById('hero-role').textContent = employee.role;
  document.getElementById('hero-quote').textContent = `"${employee.quote}"`;

  // Populate bio section
  document.getElementById('bio-title').textContent = `About ${employee.shortName}`;
  
  // Parse simple markdown-like bold text for bio
  const bioContainer = document.getElementById('bio-text');
  const parts = employee.bio.split('**');
  parts.forEach((part, index) => {
    if (index % 2 === 1) {
      const strong = document.createElement('strong');
      strong.style.color = 'var(--color-text)';
      strong.textContent = part;
      bioContainer.appendChild(strong);
    } else {
      bioContainer.appendChild(document.createTextNode(part));
    }
  });

  // Populate details
  document.getElementById('detail-dept').textContent = employee.details.department;
  
  const emailLink = document.getElementById('detail-email');
  emailLink.href = `mailto:${employee.details.email}`;
  emailLink.textContent = employee.details.email;

  const phoneLink = document.getElementById('detail-phone');
  phoneLink.href = `tel:${employee.details.phone}`;
  phoneLink.textContent = employee.details.phone;

  // Populate social links
  const socialLinksContainer = document.getElementById('social-links');
  employee.socials.forEach(social => {
    const a = document.createElement('a');
    a.href = social.url;
    a.className = 'social-link';
    a.textContent = social.name;
    socialLinksContainer.appendChild(a);
  });
});
