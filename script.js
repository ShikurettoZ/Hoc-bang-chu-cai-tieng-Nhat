// Danh sách câu hỏi (Bạn có thể tự thêm bao nhiêu chữ tùy thích vào đây)
const quizData = [
    // 1. A-row
    { char: "あ", meaning: "A" },
    { char: "い", meaning: "I" },
    { char: "う", meaning: "U" },
    { char: "え", meaning: "E" },
    { char: "お", meaning: "O" },

    // 2. Ka-row
    { char: "か", meaning: "Ka" },
    { char: "き", meaning: "Ki" },
    { char: "く", meaning: "Ku" },
    { char: "け", meaning: "Ke" },
    { char: "こ", meaning: "Ko" },

    // 3. Sa-row
    { char: "さ", meaning: "Sa" },
    { char: "し", meaning: "Shi" },
    { char: "す", meaning: "Su" },
    { char: "せ", meaning: "Se" },
    { char: "そ", meaning: "So" },

    // 4. Ta-row
    { char: "た", meaning: "Ta" },
    { char: "ち", meaning: "Chi" },
    { char: "つ", meaning: "Tsu" },
    { char: "て", meaning: "Te" },
    { char: "と", meaning: "To" },

    // 5. Na-row
    { char: "な", meaning: "Na" },
    { char: "に", meaning: "Ni" },
    { char: "ぬ", meaning: "Nu" },
    { char: "ね", meaning: "Ne" },
    { char: "の", meaning: "No" },

    // 6. Ha-row
    { char: "は", meaning: "Ha" },
    { char: "ひ", meaning: "Hi" },
    { char: "ふ", meaning: "Fu" },
    { char: "へ", meaning: "He" },
    { char: "ほ", meaning: "Ho" },

    // 7. Ma-row
    { char: "ま", meaning: "Ma" },
    { char: "み", meaning: "Mi" },
    { char: "む", meaning: "Mu" },
    { char: "め", meaning: "Me" },
    { char: "も", meaning: "Mo" },

    // 8. Ya-row
    { char: "や", meaning: "Ya" },
    { char: "ゆ", meaning: "Yu" },
    { char: "よ", meaning: "Yo" },

    // 9. Ra-row
    { char: "ら", meaning: "Ra" },
    { char: "り", meaning: "Ri" },
    { char: "る", meaning: "Ru" },
    { char: "れ", meaning: "Re" },
    { char: "ろ", meaning: "Ro" },

    // 10. Wa-row & N
    { char: "わ", meaning: "Wa" },
    { char: "を", meaning: "Wo" },
    { char: "ん", meaning: "N" },

    // 1. A-row
    { char: "A", meaning: "あ" },
    { char: "I", meaning: "い" },
    { char: "U", meaning: "う" },
    { char: "E", meaning: "え" },
    { char: "O", meaning: "お" },

    // 2. Ka-row
    { char: "Ka", meaning: "か" },
    { char: "Ki", meaning: "き" },
    { char: "Ku", meaning: "く" },
    { char: "Ke", meaning: "け" },
    { char: "Ko", meaning: "こ" },

    // 3. Sa-row
    { char: "Sa", meaning: "さ" },
    { char: "Shi", meaning: "し" },
    { char: "Su", meaning: "す" },
    { char: "Se", meaning: "せ" },
    { char: "So", meaning: "そ" },

    // 4. Ta-row
    { char: "Ta", meaning: "た" },
    { char: "Chi", meaning: "ち" },
    { char: "Tsu", meaning: "つ" },
    { char: "Te", meaning: "て" },
    { char: "To", meaning: "と" },

    // 5. Na-row
    { char: "Na", meaning: "な" },
    { char: "Ni", meaning: "に" },
    { char: "Nu", meaning: "ぬ" },
    { char: "Ne", meaning: "ね" },
    { char: "No", meaning: "の" },

    // 6. Ha-row
    { char: "Ha", meaning: "は" },
    { char: "Hi", meaning: "ひ" },
    { char: "Fu", meaning: "ふ" },
    { char: "He", meaning: "へ" },
    { char: "Ho", meaning: "ほ" },

    // 7. Ma-row
    { char: "Ma", meaning: "ま" },
    { char: "Mi", meaning: "み" },
    { char: "Mu", meaning: "む" },
    { char: "Me", meaning: "め" },
    { char: "Mo", meaning: "も" },

    // 8. Ya-row
    { char: "Ya", meaning: "や" },
    { char: "Yu", meaning: "ゆ" },
    { char: "Yo", meaning: "よ" },

    // 9. Ra-row
    { char: "Ra", meaning: "ら" },
    { char: "Ri", meaning: "り" },
    { char: "Ru", meaning: "る" },
    { char: "Re", meaning: "れ" },
    { char: "Ro", meaning: "ろ" },

    // 10. Wa-row & N
    { char: "Wa", meaning: "わ" },
    { char: "Wo", meaning: "を" },
    { char: "N", meaning: "ん" }    
];

let currentQuiz = null; // Biến lưu câu hỏi hiện tại
const charDisplay = document.getElementById('characterDisplay');
const optionButtons = document.querySelectorAll('.option-btn');
const resultMessage = document.getElementById('resultMessage');
const nextBtn = document.getElementById('nextBtn');
const footerAction = document.querySelector('.footer-action');
let streakCount = 0; // Biến đếm số câu đúng liên tiếp
const streakDisplay = document.getElementById('streakDisplay'); // Lấy phần tử hiển thị từ HTML
//function loadQuiz() {
    // Reset trạng thái giao diện
//    resultMessage.textContent = "";
//    nextBtn.style.display = "none";
//    optionButtons.forEach(btn => {
//        btn.classList.remove('correct', 'wrong');
//        btn.disabled = false;
//    });

// HIỆN LẠI NÚT "CHƯA HỌC" KHI SANG CÂU MỚI
//    if (footerAction) footerAction.style.display = "flex";
//
//    optionButtons.forEach(btn => {
 //       btn.classList.remove('correct', 'wrong');
 //       btn.disabled = false;
 //   });

    // LẤY NGẪU NHIÊN MỘT CHỮ CÁI
//    const randomIndex = Math.floor(Math.random() * quizData.length);
//    currentQuiz = quizData[randomIndex];
//    charDisplay.textContent = currentQuiz.char;

    // Tạo các đáp án nhiễu ngẫu nhiên + 1 đáp án đúng
//    let options = [currentQuiz.meaning];
//    while (options.length < 4) {
//        let randomQuiz = quizData[Math.floor(Math.random() * quizData.length)];
//        if (!options.includes(randomQuiz.meaning)) {
//            options.push(randomQuiz.meaning);
//        }
//    }

    // Xáo trộn vị trí các đáp án A, B, C, D
//    options.sort(() => Math.random() - 0.5);

    // Gắn đáp án lên các nút bấm
//    optionButtons.forEach((btn, index) => {
//        btn.textContent = options[index];
//    });
//}

    function loadQuiz() {
    // Reset trạng thái giao diện
    resultMessage.textContent = "";
    nextBtn.style.display = "none";
    optionButtons.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });

    // HIỆN LẠI NÚT "CHƯA HỌC" KHI SANG CÂU MỚI
    if (footerAction) footerAction.style.display = "flex";

    // LẤY NGẪU NHIÊN MỘT CÂU HỎI
    const randomIndex = Math.floor(Math.random() * quizData.length);
    currentQuiz = quizData[randomIndex];
    charDisplay.textContent = currentQuiz.char;

    // PHÂN LOẠI ĐÁP ÁN ĐỂ ĐỒNG BỘ NÚT BẤM
    // Kiểm tra xem đáp án (meaning) có phải là chữ Latinh (a-z, A-Z) hay không
    const isRomajiAnswer = /^[a-zA-Z]/.test(currentQuiz.meaning);

    // Lọc ra một mảng chỉ chứa các từ vựng CÙNG KIỂU với đáp án hiện tại
    const sameTypeData = quizData.filter(item => {
        const isItemRomaji = /^[a-zA-Z]/.test(item.meaning);
        return isItemRomaji === isRomajiAnswer;
    });

    // Tạo các đáp án nhiễu ngẫu nhiên (chỉ lấy từ mảng cùng kiểu) + 1 đáp án đúng
    let options = [currentQuiz.meaning];
    while (options.length < 4) {
        let randomQuiz = sameTypeData[Math.floor(Math.random() * sameTypeData.length)];
        if (!options.includes(randomQuiz.meaning)) {
            options.push(randomQuiz.meaning);
        }
    }
    
    // Xáo trộn vị trí các đáp án A, B, C, D
    options.sort(() => Math.random() - 0.5);

    // Gắn đáp án lên các nút bấm
    optionButtons.forEach((btn, index) => {
        btn.textContent = options[index];
    });
}


function checkAnswer(selectedIndex) {
    const selectedBtn = optionButtons[selectedIndex];

    // Khóa tất cả các nút sau khi chọn
    optionButtons.forEach(btn => btn.disabled = true);

    // ẨN LUÔN CẢ KHUNG CHỨA NÚT "CHƯA HỌC" KHI ĐÃ CHỌN ĐÁP ÁN
    if (footerAction) footerAction.style.display = "none";

    if (selectedBtn.textContent === currentQuiz.meaning) {
        selectedBtn.classList.add('correct');
        resultMessage.textContent = "Correct! 🎉";
        resultMessage.style.color = "#2ecc71";

        // TĂNG ĐIỂM STREAK KHI ĐÚNG
        streakCount++;
        streakDisplay.textContent = "🔥 Streak: " + streakCount;
    } else {
        selectedBtn.classList.add('wrong');
        resultMessage.textContent = "Incorrect! 😢";
        resultMessage.style.color = "#e74c3c";

        // RESET STREAK VỀ 0 KHI SAI
        streakCount = 0;
        streakDisplay.textContent = "🔥 Streak: " + streakCount;
        
        // Sáng lên đáp án đúng cho người dùng thấy
        optionButtons.forEach(btn => {
            if (btn.textContent === currentQuiz.meaning) {
                btn.classList.add('correct');
            }
        });
    }

    // Hiện nút sang câu tiếp theo
    nextBtn.style.display = "block";
}

function nextQuestion() {
    // Gọi lại hàm loadQuiz để bốc một câu ngẫu nhiên tiếp theo
    loadQuiz();
}

// Chạy lần đầu tiên khi mở app
loadQuiz();
