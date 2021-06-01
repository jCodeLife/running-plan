function drawGF(img_src = 'gf.jpg', color = '#000', bg_color = "#fff") {
    let canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext('2d')
    let img = new Image()
    img.src = img_src
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0)
        let imageData = ctx.getImageData(0, 0, img.width, img.height).data;
        ctx.fillStyle = bg_color;
        ctx.fillRect(0, 0, img.width, img.height);
        let gap = 1
        for (let h = 0; h < img.height; h += gap) {
            for (let w = 0; w < img.width; w += gap) {
                let position = (img.width * h + w) * 4;
                let r = imageData[position], g = imageData[position + 1], b = imageData[position + 2];
                if (r + g + b <= 510) {
                    ctx.fillStyle = color;
                    ctx.fillRect(w, h, 3, 3);
                }
            }
        }
    }
}