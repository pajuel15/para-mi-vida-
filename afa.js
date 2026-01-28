const reasons = [
    "amo tus ojos parecen almendras", "amo tus cachetitos JAJAJ aveces los quiero morder", "amo tu pelo y mas cuando te lo pintas JAJAJJA", "amo tus labios son re lindos y siempre los quiero besar", "amo tus besos son algo que aun despues de meses no puedo olvidar",
    "amo tu personalidad aveces eres bien down pero aun asi me gusta JAJAJ", "amo tus pestañas pero aveces las reutilizas puerca", "amo tus abrazos aunque ya no los pueda recibir", "amo tu calor es un calor que me reconforta mucho siempre que lo sentia", "amo tu voz es muy relajante cuando no te pones de down",
    "amo tu forma de ser con los animales asi bien tierna JAJAJA", "amo cuando te pones tierna siempre me gusta aunque sea por momentos", "amo tus pies JAJAJJA mentira por eso me dijieron chupa pie bye", "amo el hecho de que siempre vuelves a mi aun sabiendo como soy", "amo hacer llamadas contigo aunq aveces me hagas sentir mal",
    "amo estar a tu lado siempre me a gustado", "amo tu sonrisa aunque en una foto que me mandaste me dio miedo perdon;c", "amo como me haces sentir cuando me tratas lindo me encanta", "amo tu forma de ver el mundo y la forma en la que me lo hiciste ver a mi(ahora eso es un dolor de cabeza para mi)", "amo tus brazitos todos chikitos JAJJAJ me parecen tiernos",
    "amo que me apoyabas en casi todo AJJAJJA extraño eso:(", "amo tu inteligencia aunq aveces eres bien presumida de eso", "amo que tus ojos siempre se vean alegres aun cuando estas trizte eso lo vi varias veces en el colegio y me encantaba", "amo como aveces me tienes una paciencia que ni yo me la creo JQJAJJAJ se que soy molesto", "amo como en algun momento decidiste ser detallista conmigo y eso nunca lo olvidare",
    "amo que siempre consigas una forma de terminar haciendome entrar en razon y dejar mi enojo de lado eres una bruja o no se JAJAJ", "amo como hueles esa colonia siempre me gusto aunq aveces te pasabas", "amo como a pesar de todo siempre lograste salir adelante en tus peores etapas aunq tu tambien eras bien pendeja", "amo la paz que me puedes dar cuando estas conmigo(tambien el miedo)", "amo que me mires cuando no me doy cuenta aunq me parece muy acosador AJAJA pero aun asi lo amo",
    "amo tu sentido del humor aunq aveces es bien raro JAJAJJA", "amo la forma en la que te haces tierna aww siempre me encanto pero aveces cambias de la nada y eso es feito", "amo como siempre trata de ser buena a pesar de que te hagan cosas malas", "amo nuestras charlas profundas cuando decidimos tenerlas", "amo que te preocupes por mi aunq aveces me deseas la muerte AJAJ",
    "amo como te llegaste a llevar con mi primo la unica vez que te deje hablar con el por whatsapp jJAJAJJA", "amo que confies en mi tus sueños pero mi vida psicologa?", "amo tu valentia(te dan miedo las cucarachas y te asustas por todo)JAJAJAJ", "amo como bailas y si te vi bailar por si te lo preguntas aunque me dio risa aAJJAJA", "amo la forma en la que tomabas mi mano al caminar(aveces te la apretaba pa joderte)",
    "amo que me hagas querer ser la mejor version de mi aunq soy bien pendejo por hacerlo por alguien y no x mi lo se no me regañes", "amo tu pasión por las peliculas de amor uy no eres bien viciosa a esas", "amo tu cabello cuando te acabas de levantar JAJAJAJ aunq es bien raro", "amo tus mensajes lindos y tambien tus mensajes cuando te pones cansona por mi atencion te amo", "amo que seas alguien que me \"escucha\"(aveces me ignoras mas JAJAJJA)",
    "amo como te defiendes aveces te pones más grosera JAJAJJ ay no", "amo cuando eras generosa (me regalabas gaseosa)", "amo que aveces se que me conoces tan bien que sabes que pienso sin hablar aunq no lo digas yo lo se ya sabes leerme", "amo que seas bien manca en plato asi te gano facil jejeje", "amo tu manera de maquillarte me parece muy bonita y extraña a la vez",
    "amo que te emociones facil siempre me encanto eso de ti literal JAJAJ", "amo como perdonas.. y sigues adelante", "amo como siempre en la primera persona que pienso en contarle algo es a ti", "amo como me cuidas cuando me siento mal recuerdas ese dia en el colegio que me fui aun recuerdo como me cuidaste", "amo que aveces muy pocas veces pero aveces decidas creer en mi ya me dio fue rabia hacer esta bye",
    "amo tus consejos aunque algunos sean matarme zorra", "amo poder ser yo mismo sin sentirme juzgado", "amo las ganas que deseas cumplir tus metas este o no contigo", "amo como te vez cuando te concentras como esa vez en matematicas que te vi mas concentrada JAJJAJA pobrecita le toca nivelar", "amo tu lado fuerte siempre me dejas doliendo el brazo",
    "amo que pienses diferente y no seas igual a esas mlps con las que muchas veces me topo y no no hablo con nadie asi no te enojes pls", "amo la forma en la que me miras me parece simplemente extraña y hermosa", "amo que seas una de las cosas que mas tengo en la cabeza todo el dia (pienso en ti muchas veces diria que demasiado)", "amo como me haces reir incluso aveces cuando estoy enojado por algo eso me encanta de ti", "amo tu empatia hacia los animales los cuidas mas que a mi zorra",
    "amo que siempre tengas una forma de alentarme bien sea de manera normal o haciendome reir ojala siempre me hicieras reir", "amo el futuro que planeas para los dos aunq eso de 6 gatos no me parece yo quiero que sean 11", "amo que siempre recuerdes las fechas importante no como alguien por aca", "amo que seas muy creativa osea aveces ni yo me creo como eres asi", "amo que me hagas sentir amado y querido siempre",
    "amo nuestras bromas JAJAJjA meñique me decia byee", "amo que me dejes ser tu apoyo en muchos malos momentos por los que pasaste", "amo que seas tan trabajadora aunq siempre te quejas por el trabajo", "amo como te ves con tu ropa pero no me gusta tu ropa cortaaaaaaa", "amo que me enseñes a ver el mundo mas con amor(no veo nada)",
    "amo como tus abrazos curan todo menos tus puños y mordidas", "amo que me dejes conocer tus miedo sin ningun tipo de problema cosita", "amo que aveces eres mi refugio en todo el caos de mi vida que aunq no lo parezca sufro aveces", "amo como me inspiras a no rendirme nunca en mis metas como por ejemplo una que fue pasar el año y mira", "amo que compartamos algunas canciones como cosas que nos gustan JAJAJ las de kiyo me dan risa",
    "amo tu manera en que pides las cosas me da una ternura y unas ganas de decirte que si sin pensarlo", "amo que me hagas sentir que todo es posible si estamos juntos(siempre sale algo mal)", "amo tu curiosidad aunq aveces eres bien rara por esa misma curiosidad", "amo que seas buena persona incluso con gente que te llego a hacer mal", "amo que guardes mis mayores secretos y donde los digas te cuelgo",
    "amo como me haces sentir mariposas aun luego de tanto tiempo y tantas cosas", "amo como tanta gente te quiere aun si no le hablas que putas y a mi nadie me quiere y hablo con muchos", "amo como aveces eres madura y otras una niña con down severo", "amo como aveces tienes unas caras y unos gestos JAJAJJAJAJAJJAJA", "amo que seas tan segura casi siempre pero pa hablar con gente nueva si te cuesta eh",
    "amo tu optimismo asi se este llendo todo a la mierda", "amo que me dejes ser siempre parte de tu vida incluso en tus peores momentos y perdon si no estoy en esos momentos", "amo que seas la dueña de mi corazon pero no me lo quites pls", "amo como me haces sentir que no me hace falta nada (excepto plata obvio)", "amo que me ames con todas mis fallas aun sabiendo como soy",
    "amo que seas tan perfecta a mis ojos osea si no fuera por lo down serias una diosa para mi", "amo que seas mi cachetona", "amo tus gustos por hellow kitty aunq aveces me dan miedo", "amo que simplemente seas tu y sin importa que pase no cambies", "amo todo lo que representas dani amo todo de ti incluso si eso me lastima"
];

const startBtn = document.getElementById('start-btn');
const music = document.getElementById('background-music');

startBtn.addEventListener('click', () => {
    document.getElementById('start-overlay').style.display = 'none';
    music.play();
    startTyping();
    setInterval(createHeart, 300);
});

function typeEffect(element, text, speed = 40) {
    return new Promise(resolve => {
        let i = 0;
        element.innerHTML = ""; 
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

async function startTyping() {
    await typeEffect(document.getElementById('main-title'), "Para mi cachetona favorita...", 80);
    await typeEffect(document.getElementById('intro-text'), "Escribí esto para ti. Aquí van las 100 razones por las que te amo:");
    
    const list = document.getElementById('reasons-list');
    for (let i = 0; i < reasons.length; i++) {
        const li = document.createElement('li');
        list.appendChild(li);
        // Aquí se agrega el número automáticamente: i + 1
        await typeEffect(li, `${i + 1}. ${reasons[i]}`, 25);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    
    const final = document.getElementById('final-phrase');
    await typeEffect(final, "Siempre estaré para ti mi amor ❤️", 100);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}