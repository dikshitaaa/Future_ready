// ============================================
// DAILY MOTIVATION QUOTES - LOGRA
// Changes automatically every day
// ============================================

const motivationalQuotes = [
    { quote: "The future depends on what you do today.", author: "Mahatma Gandhi", category: "💪 SUCCESS" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "🔥 MOTIVATION" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "💼 CAREER" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "💪 SUCCESS" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "🔥 MOTIVATION" },
    { quote: "Your career is a garden. You plant, nurture, and harvest the results.", author: "Unknown", category: "💼 CAREER" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", category: "🔥 MOTIVATION" },
    { quote: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius", category: "💼 CAREER" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "💪 SUCCESS" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "💪 SUCCESS" },
    { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "💼 CAREER" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "🔥 MOTIVATION" },
    { quote: "Your work is to discover your work and then with all your heart to give yourself to it.", author: "Buddha", category: "💼 CAREER" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "💪 SUCCESS" },
    { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown", category: "🔥 MOTIVATION" },
    { quote: "Dream it. Believe it. Build it.", author: "Unknown", category: "💼 CAREER" },
    { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", category: "🔥 MOTIVATION" },
    { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", category: "💪 SUCCESS" },
    { quote: "Your limitation—it's only your imagination.", author: "Unknown", category: "🔥 MOTIVATION" },
    { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "🔥 MOTIVATION" },
    { quote: "Great things never come from comfort zones.", author: "Unknown", category: "💪 SUCCESS" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh", category: "🔥 MOTIVATION" },
    { quote: "Success doesn't just find you. You have to go out and get it.", author: "Unknown", category: "💪 SUCCESS" },
    { quote: "The future starts today, not tomorrow.", author: "Pope John Paul II", category: "🔥 MOTIVATION" },
    { quote: "Don't stop when you're tired. Stop when you're done.", author: "Unknown", category: "🔥 MOTIVATION" },
    { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown", category: "💪 SUCCESS" },
    { quote: "Little things make big days.", author: "Unknown", category: "🔥 MOTIVATION" },
    { quote: "It's going to be hard, but hard does not mean impossible.", author: "Unknown", category: "🔥 MOTIVATION" },
    { quote: "Never give up. Great things take time.", author: "Unknown", category: "💪 SUCCESS" },
    { quote: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar", category: "🔥 MOTIVATION" },
    { quote: "The expert in anything was once a beginner.", author: "Helen Hayes", category: "💼 CAREER" },
    { quote: "Your career is a marathon, not a sprint. Pace yourself.", author: "Unknown", category: "💼 CAREER" },
    { quote: "Every master was once a disaster.", author: "T. Harv Eker", category: "🔥 MOTIVATION" },
    { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier", category: "💪 SUCCESS" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon", category: "💪 SUCCESS" },
    { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers", category: "🔥 MOTIVATION" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "🔥 MOTIVATION" },
    { quote: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr.", category: "💪 SUCCESS" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett", category: "💪 SUCCESS" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "🔥 MOTIVATION" },
    { quote: "Your profession is not what brings home your paycheck. Your profession is what you're put here on earth to do.", author: "Unknown", category: "💼 CAREER" }
];

// Get today's unique quote (changes every day)
function getDailyQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % motivationalQuotes.length;
    return motivationalQuotes[quoteIndex];
}

// Display quote in any container
function displayDailyQuote(containerId) {
    const quote = getDailyQuote();
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15)); backdrop-filter: blur(10px); border-radius: 20px; padding: 20px 25px; margin: 20px auto; text-align: center; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s ease; max-width: 650px;">
                <div style="font-size: 2rem; margin-bottom: 10px; animation: floatQuote 3s ease-in-out infinite;">💫</div>
                <div style="font-size: 1.2rem; font-weight: 500; line-height: 1.5; color: white; margin-bottom: 12px; font-style: italic;">"${quote.quote}"</div>
                <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 8px;">— ${quote.author}</div>
                <div style="display: inline-block; background: rgba(59,130,246,0.3); padding: 4px 12px; border-radius: 50px; font-size: 0.7rem; color: #60a5fa; letter-spacing: 1px; font-weight: 600;">${quote.category} TIP</div>
            </div>
        `;
        
        // Add animation style if not exists
        if (!document.querySelector('#quoteAnimationStyle')) {
            const style = document.createElement('style');
            style.id = 'quoteAnimationStyle';
            style.textContent = `
                @keyframes floatQuote {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Auto-initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    const quoteContainer = document.getElementById('dailyQuoteContainer');
    if (quoteContainer) {
        displayDailyQuote('dailyQuoteContainer');
    }
});