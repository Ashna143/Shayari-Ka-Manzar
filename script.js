// Handling comment submissions
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
    
    // Create a new list item for the comment
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    
    // Append the new comment to the comment list
    commentList.appendChild(newComment);
    
    // Clear the input field
    commentInput.value = '';
});

// Handling shayari submissions
document.getElementById('shayari-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const shayariInput = document.getElementById('shayari-input');
    
    // Display the new shayari in the example section (you can customize this)
    const shayariExample = document.getElementById('shayari-example');
    const newShayari = document.createElement('div');
    newShayari.classList.add('shayari');
    newShayari.innerHTML = `<p>${shayariInput.value}</p><p><strong>Category:</strong> User Submitted</p>`;
    
    // Append the new shayari to the display section
    shayariExample.appendChild(newShayari);
    
    // Clear the input field
    shayariInput.value = '';
});
