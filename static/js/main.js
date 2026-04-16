document.addEventListener('DOMContentLoaded', () => {
    // ── Theme ────────────────────────────────────────────────────────────────
    const toggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (toggleBtn) {
        toggleBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
        toggleBtn.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            toggleBtn.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
        });
    }

    // ── Dynamic Subjects (shared across add_student + entrance_test) ──────────
    function attachRemoveBtn(row) {
        const removeBtn = row.querySelector('.btn-remove-subject');
        if (removeBtn) removeBtn.addEventListener('click', () => row.remove());
    }

    const addSubjectBtn = document.getElementById('add-subject-btn');
    if (addSubjectBtn) {
        // Attach to existing rows on page load
        document.querySelectorAll('.subject-row').forEach(attachRemoveBtn);

        addSubjectBtn.addEventListener('click', () => {
            const container = document.getElementById('subjects-container');
            const row = document.createElement('div');
            row.className = 'subject-row';
            row.innerHTML = `
                <input type="text" name="subject_name[]" class="form-control" placeholder="Subject (e.g. Math)" style="flex:1">
                <input type="text" name="subject_score[]" class="form-control" placeholder="Score % or Good/Average/Weak" style="flex:1">
                <button type="button" class="btn btn-danger btn-remove-subject" style="padding: 0.5rem 0.8rem">✕</button>
            `;
            container.appendChild(row);
            attachRemoveBtn(row);
        });
    }

    // ── Image Compression & Base64 ────────────────────────────────────────────
    const photoInput = document.getElementById('photo-upload');
    if (photoInput) {
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (readerEvt) {
                const img = new Image();
                img.onload = function () {
                    // Compress: max 400px, JPEG quality 0.7 (~30-60KB)
                    const MAX = 400;
                    let w = img.width, h = img.height;
                    if (w > MAX || h > MAX) {
                        if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
                        else { w = Math.round(w * MAX / h); h = MAX; }
                    }
                    const canvas = document.createElement('canvas');
                    canvas.width = w; canvas.height = h;
                    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                    const compressed = canvas.toDataURL('image/jpeg', 0.7);
                    document.getElementById('photo_base64').value = compressed;
                    const preview = document.getElementById('photo-preview');
                    if (preview) { preview.src = compressed; preview.style.display = 'block'; }
                };
                img.src = readerEvt.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    // ── Teacher Rating Stars ──────────────────────────────────────────────────
    const stars = document.querySelectorAll('.star-btn');
    const ratingInput = document.getElementById('rating-input');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const val = parseInt(star.dataset.val);
            if (ratingInput) ratingInput.value = val;
            stars.forEach(s => {
                s.style.color = parseInt(s.dataset.val) <= val ? '#f6c23e' : '#cccccc';
            });
        });
    });
});
