let y = document.getElementById("pagecontent");
if (y !== undefined) {
    const converter = new EmojiConvertor;
//    converter.replace_mode = 'unified';
//    converter.allow_native = true;
    converter.use_sheet = true
    converter.img_sets.apple.sheet = "/e/emoji-assets/emoji-datasource/img/apple/sheets/32.png";
    
    converter.img_sets.facebook.sheet = "/e/emoji-assets/emoji-datasource/img/facebook/sheets/32.png";
    
    converter.img_sets.google.sheet = "/e/emoji-assets/emoji-datasource/img/google/sheets/32.png";
    
    converter.img_sets.twitter.sheet = "/e/emoji-assets/emoji-datasource/img/twitter/sheets/32.png";
    
    y.innerHTML = converter.replace_colons(y.innerHTML);
}
