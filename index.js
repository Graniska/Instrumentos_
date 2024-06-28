   
                      
   console.log("Você toca algum instrumento musical?");

let resposta;
let instrumento;

process.stdin.on('data', function(data) {
    let input = data.toString().trim().toLowerCase();

    if (!resposta) {
        resposta = input;

        if (resposta === "sim" || resposta === "s") {
            console.log("Incrível! Qual instrumento?");
        } else if (resposta === "não" || resposta === "n" || resposta === "nao") {
            console.log("Ah, que pena!");
            process.exit();
        } else {
            console.log("Desculpe, não entendi sua resposta.");
            console.log("Toca mais algum instrumento?");
                instrumento = undefined;
            process.exit();
        }
    } else if (!instrumento) {
        instrumento = input;

        switch (instrumento) {
            case 'violão':
            case 'violao':
                console.log("Certeza que toca um Luan Santana no off.");
                process.exit();
                break;
            case 'guitarra':
                console.log("Se meter um Metallica até caso contigo.");
                process.exit();
                break;
            case 'sanfona':
                console.log("Chegue no meu churras e toque um Baitaca, tchê!");
                process.exit();
                break;
            case 'não':
            case 'n':
            case 'nao':
                console.log("Ah, que pena!");
                process.exit();
                break;
            default:
                console.log("Não conheço esse instrumento.");
                console.log("Toca mais algum instrumento?");
                instrumento = undefined;
                break;
        }
    }
});