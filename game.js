// 灯谜题目和答案
const riddles = [
     { question: "一只小小船，水里游，船上人不见，只有水中的影子，猜一物", answer: "镜子" },
    { question: "头戴红缨帽，身披绿衣裳，走路声音响，猜一物", answer: "蜻蜓" },
    { question: "白白一团水，黑黑一条线，猜一物", answer: "书" },
    { question: "猜一动物，身上有两条胡须，走路慢悠悠，猜一物", answer: "猫" }
];

let currentRiddle = 0;
let correctAnswers = 0;  // 用来记录答对的题目数

// 获取页面元素
const riddleElement = document.getElementById('riddle');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next');
const restartButton = document.getElementById('restart');
const musicControlButton = document.getElementById('music-control');
const bgMusic = document.getElementById('bg-music');
const resultElement = document.getElementById('result');

// 显示灯谜
function displayRiddle() {
    const riddle = riddles[currentRiddle];
    riddleElement.textContent = riddle.question;
    feedbackElement.textContent = '';
    answerElement.value = '';
    submitButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
}

// 提交答案
function checkAnswer() {
    const answer = answerElement.value.trim();
    const correctAnswer = riddles[currentRiddle].answer;

    // 判断用户输入的答案是否正确
    if (answer === correctAnswer) {
        feedbackElement.textContent = "答对了！"; // 显示答对了
        correctAnswers++;  // 增加答对的数量
    } else {
        feedbackElement.textContent = `答错了，正确答案是：${correctAnswer}`;  // 显示答错了
    }

    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

// 显示下一个灯谜
function nextRiddle() {
    currentRiddle++;

    if (currentRiddle < riddles.length) {
        displayRiddle();
    } else {
        feedbackElement.textContent = "恭喜你完成了所有灯谜！元宵节快乐！";
        nextButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        showResult();
    }
}

// 重启游戏
function restartGame() {
    currentRiddle = 0;
    correctAnswers = 0;  // 重置答对数量
    displayRiddle();
    restartButton.style.display = 'none';
    resultElement.innerHTML = '';  // 清空结果
}

// 初始化游戏
displayRiddle();

// 绑定按钮事件
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextRiddle);
restartButton.addEventListener('click', restartGame);

// 控制音乐播放
musicControlButton.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControlButton.textContent = '暂停音乐';
    } else {
        bgMusic.pause();
        musicControlButton.textContent = '播放音乐';
    }
});