const scripturesSource = [
      {scripture: 'I can do all things through Christ who strengthens me.', chapter: 'Philippians 4:13'},
      {scripture: 'Lead me in the right path, O Lord, or my enemies will conquer me. Make your way plain for me to follow.', chapter: 'Psalm 5:8'}, 
      {scripture: 'But God is so rich in mercy, and he loved us so much, that even though we were dead because of our sins, he gave us life when he raised Christ from the dead.', chapter: 'Ephesians 2:4-5'},
      {scripture: 'This is how the Lord responds: "If you return to me, I will restore you so you can continue to serve me. If you speak good words rather than worthless ones, you will be my spokesman. You must influence them; do not let them influence you!"', chapter: 'Jeremiah 15:19'},
      {scripture: 'The Lord of Heaven\'s Armies is a wonderful teacher, and he gives the farmer great wisdom.', chapter: 'Isaiah 28:29'},
      {scripture: 'And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.', chapter: 'Romans 8:28'},
      {scripture: 'Obviously, I\'m not trying to win the approval of people, but of God. If pleasing people were my goal, I would not be Christ\'s servant.', chapter: 'Galations 1:10'},
      {scripture: 'Dear friend, you are being faithful to God when you care for the traveling teachers who pass through, even though they are strangers to you.', chapter: '3 John 1:5'}
    ];

function scriptureGenerator() {
    var length = scripturesSource.length;
    var random = Math.floor(Math.random() * length);

    for(let i = 0; i <= length; i+=1) {
        var newScripture = scripturesSource[random].scripture;
        var newChapter = scripturesSource[random].chapter;
    }
    return `${newScripture} 
               --- ${newChapter}`;
}

var str = scriptureGenerator();
console.log(str);