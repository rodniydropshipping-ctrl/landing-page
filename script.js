const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // כשהשירותים נכנסים למסך - תוסיף את האנימציה
      entry.target.classList.add('active');
    } else {
      // כשיוצאים מהאזור - תעלים אותם שוב כדי שהאפקט יחזור
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.15 }); // האפקט יתחיל כש-15% מהאזור נראה במסך

// מפעיל את הבדיקה על כל מה שסימנו ב-reveal
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
