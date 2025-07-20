document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const comment = document.getElementById('comment').value.trim();
  const submitBtn = document.querySelector('#commentForm button[type="submit"]');

  const nameRegex = /^[a-zA-Z\s]+$/;
  const commentRegex = /^.{1,500}$/;
  let valid = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('commentError').textContent = '';

  if (!nameRegex.test(name)) {
    document.getElementById('nameError').textContent = 'Invalid name. Only letters and spaces are allowed.';
    valid = false;
  }

  if (!commentRegex.test(comment)) {
    document.getElementById('commentError').textContent = 'Comment must be between 1 and 500 characters.';
    valid = false;
  }

  if (valid) {
    emailjs.send("MaxiEvilman", "template_ew1ibh2", {
      user_name: name,
      user_comment: comment
    }).then(() => {
      alert('✅ Your comment was successfully submitted!');
      document.getElementById('commentForm').reset();

      let secondsLeft = 30;
      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;

      const countdown = setInterval(() => {
        submitBtn.textContent = `${secondsLeft}`;
        secondsLeft--;
        if (secondsLeft < 0) {
          clearInterval(countdown);
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      }, 1000);
    }).catch((error) => {
      console.error('Error sending comment:', error);
      alert('❌ An error occurred while submitting your comment. Please try again later.');
    });
  }
});
