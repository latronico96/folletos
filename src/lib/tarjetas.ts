export type versiculo = {
    referencia: string;
    rv: string;
    nvi: string;
}

export type Tarjeta = {
  sentimiento: string;
  versiculos: versiculo[]
}

const tarjetaNadieMeAma: Tarjeta = {
  sentimiento: "Nadie me ama",
  versiculos: [
    {
      referencia: "Romanos 5:8",
      rv: "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.",
      nvi: "Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros."
    },
    {
      referencia: "Salmos 100:5",
      rv: "Porque Jehová es bueno; para siempre es su misericordia, y su verdad por todas las generaciones.",
      nvi: "Porque el Señor es bueno y su gran amor es eterno; su fidelidad permanece para siempre."
    },
    {
      referencia: "Juan 3:16",
      rv: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
      nvi: "Porque tanto amó Dios al mundo, que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna."
    },
    {
      referencia: "Jeremías 31:3",
      rv: "Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",
      nvi: "Yo te he amado con un amor eterno; por eso te sigo mostrando mi lealtad."
    },
    {
      referencia: "Salmos 36:7",
      rv: "¡Cuán preciosa, oh Dios, es tu misericordia! Por eso los hijos de los hombres se amparan bajo la sombra de tus alas.",
      nvi: "¡Cuán precioso, oh Dios, es tu gran amor! Todo ser humano halla refugio a la sombra de tus alas."
    },
    {
      referencia: "Isaías 54:10",
      rv: "Porque los montes se moverán, y los collados temblarán, pero no se apartará de ti mi misericordia, ni el pacto de mi paz se quebrantará, dijo Jehová, el que tiene misericordia de ti.",
      nvi: "Aunque cambien de lugar las montañas y se tambaleen las colinas, no cambiará mi fiel amor por ti ni vacilará mi pacto de paz —dice el Señor, que de ti se compadece—."
    },
    {
      referencia: "Romanos 8:38-39",
      rv: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro.",
      nvi: "Pues estoy convencido de que ni la muerte ni la vida, ni ángeles ni demonios, ni lo presente ni lo por venir, ni los poderes, ni lo alto ni lo profundo, ni cosa alguna en toda la creación podrá apartarnos del amor que Dios nos ha manifestado en Cristo Jesús nuestro Señor."
    },
    {
      referencia: "1 Juan 4:19",
      rv: "Nosotros le amamos a él, porque él nos amó primero.",
      nvi: "Nosotros amamos porque él nos amó primero."
    }
  ]
};

const tarjetaNoPuedoHacerlo: Tarjeta = {
  sentimiento: "No puedo hacerlo",
  versiculos: [
    {
      referencia: "Salmos 32:8",
      rv: "Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos.",
      nvi: "El Señor dice: ‘Yo te instruiré, yo te mostraré el camino que debes seguir; yo te daré consejos y velaré por ti’."
    },
    {
      referencia: "Filipenses 4:13",
      rv: "Todo lo puedo en Cristo que me fortalece.",
      nvi: "Todo lo puedo en Cristo que me da fuerzas."
    },
    {
      referencia: "Josué 1:9",
      rv: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      nvi: "Ya te lo he ordenado: ¡Sé fuerte y valiente! ¡No tengas miedo ni te desanimes! Porque el Señor tu Dios te acompañará dondequiera que vayas."
    },
    {
      referencia: "Isaías 41:10",
      rv: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
      nvi: "Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra victoriosa."
    }
  ]
};

const tarjetaNoSoyCapaz: Tarjeta = {
  sentimiento: "No soy capaz",
  versiculos: [
    {
      referencia: "Proverbios 2:6",
      rv: "Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia.",
      nvi: "El Señor es quien da la sabiduría; de su boca provienen el conocimiento y la inteligencia."
    },
    {
      referencia: "Job 12:13",
      rv: "Con Dios está la sabiduría y el poder; suyo es el consejo y la inteligencia.",
      nvi: "Con Dios están la sabiduría y el poder; suyos son el consejo y el entendimiento."
    },
    {
      referencia: "2° Corintios 12:9",
      rv: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
      nvi: "Pero él me dijo: ‘Te basta con mi gracia, pues mi poder se perfecciona en la debilidad’. Por eso, con mucho gusto habré de jactarme más bien en mis debilidades, para que permanezca sobre mí el poder de Cristo."
    },
    {
      referencia: "Santiago 1:5",
      rv: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
      nvi: "Si a alguno de ustedes le falta sabiduría, pídasela a Dios, y él se la dará, pues Dios da a todos generosamente sin menospreciar a nadie."
    }
  ]
};


const tarjetaEstoyCansadonoTengoFuerzas: Tarjeta = {
  sentimiento: "Estoy cansado, no tengo fuerzas",
  versiculos: [
    {
      referencia: "Isaías 40:31",
      rv: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
      nvi: "Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán."
    },
    {
      referencia: "Salmos 116:6-8",
      rv: "Jehová guarda a los sencillos; estaba yo postrado, y me salvó. Vuelve, oh alma mía, a tu reposo, porque Jehová te ha hecho bien. Pues tú has librado mi alma de la muerte, mis ojos de lágrimas, y mis pies de resbalar.",
      nvi: "El Señor cuida de la gente sencilla; estaba yo muy débil, y él me salvó. ¡Ya puedes estar tranquila, alma mía, que el Señor ha sido bueno contigo! Tú, Señor, me has librado de la muerte, has enjugado mis lágrimas, no has dejado que tropiecen mis pies."
    },
    {
      referencia: "Isaías 40:29",
      rv: "Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
      nvi: "Él fortalece al cansado y acrecienta las fuerzas del débil."
    },
    {
      referencia: "Éxodo 33:14",
      rv: "Y él dijo: Mi presencia irá contigo, y te daré descanso.",
      nvi: "Yo mismo iré contigo y te daré descanso —respondió el Señor—."
    },
    {
      referencia: "Mateo 11:28",
      rv: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
      nvi: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso."
    }
  ]
};

const tarjetaMeSientoSoloOTriste: Tarjeta = {
  sentimiento: "Me siento solo o triste",
  versiculos: [
    {
      referencia: "Isaías 40:31",
      rv: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
      nvi: "Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán."
    },
    {
      referencia: "Salmos 116:6-8",
      rv: "Jehová guarda a los sencillos; estaba yo postrado, y me salvó. Vuelve, oh alma mía, a tu reposo, porque Jehová te ha hecho bien. Pues tú has librado mi alma de la muerte, mis ojos de lágrimas, y mis pies de resbalar.",
      nvi: "El Señor cuida de la gente sencilla; estaba yo muy débil, y él me salvó. ¡Ya puedes estar tranquila, alma mía, que el Señor ha sido bueno contigo! Tú, Señor, me has librado de la muerte, has enjugado mis lágrimas, no has dejado que tropiecen mis pies."
    },
    {
      referencia: "Isaías 40:29",
      rv: "Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
      nvi: "Él fortalece al cansado y acrecienta las fuerzas del débil."
    },
    {
      referencia: "Éxodo 33:14",
      rv: "Y él dijo: Mi presencia irá contigo, y te daré descanso.",
      nvi: "Yo mismo iré contigo y te daré descanso —respondió el Señor—."
    },
    {
      referencia: "Mateo 11:28",
      rv: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
      nvi: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso."
    }
  ]
};


const tarjetaNoValgoNada: Tarjeta = {
  sentimiento: "No valgo nada",
  versiculos: [
    {
      referencia: "1 Pedro 1:9",
      rv: "Obteniendo el fin de vuestra fe, que es la salvación de vuestras almas.",
      nvi: "Porque están obteniendo la meta de su fe, que es su salvación."
    },
    {
      referencia: "Isaías 43:4",
      rv: "Porque a mis ojos fuiste de gran estima, fuiste honorable, y yo te amé; daré, pues, hombres por ti, y naciones por tu vida.",
      nvi: "Eres precioso a mis ojos y digno de honra, y yo te amo. Daré hombres a cambio de ti, y naciones por tu vida."
    },
    {
      referencia: "Zacarías 2:8",
      rv: "Porque así ha dicho Jehová de los ejércitos: tras la gloria me enviará él a las naciones que os despojaron; porque el que os toca, toca a la niña de su ojo.",
      nvi: "Porque así dice el Señor Todopoderoso: ‘El que los toca a ustedes, toca a la niña de mi ojo’."
    }
  ]
};

const tarjetaSoyUnError: Tarjeta = {
  sentimiento: "Soy un error",
  versiculos: [
    {
      referencia: "Salmos 139:13-14",
      rv: "Porque tú formaste mis entrañas; tú me hiciste en el vientre de mi madre. Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien.",
      nvi: "Tú creaste mis entrañas; me formaste en el vientre de mi madre. ¡Te alabo porque soy una creación admirable! ¡Tus obras son maravillosas, y esto lo sé muy bien!"
    },
    {
      referencia: "Efesios 2:10",
      rv: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.",
      nvi: "Porque somos hechura de Dios, creados en Cristo Jesús para buenas obras, las cuales Dios dispuso de antemano a fin de que las pongamos en práctica."
    },
    {
      referencia: "Isaías 49:16",
      rv: "He aquí que en las palmas de las manos te tengo esculpida; delante de mí están siempre tus muros.",
      nvi: "Mira, te tengo grabada en las palmas de mis manos; tus muros están siempre ante mí."
    }
  ]
};

const tarjetaEstoyPreocupadoAnsioso: Tarjeta = {
  sentimiento: "Estoy preocupado/ansioso",
  versiculos: [
    {
      referencia: "1 Pedro 5:7",
      rv: "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
      nvi: "Depositen en él toda ansiedad, porque él cuida de ustedes."
    },
    {
      referencia: "Juan 14:27",
      rv: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.",
      nvi: "La paz les dejo; mi paz les doy. Yo no se la doy a ustedes como la da el mundo. No se angustien ni se acobarden."
    },
    {
      referencia: "Salmos 4:8",
      rv: "En paz me acostaré, y asimismo dormiré; porque solo tú, Jehová, me haces vivir confiado.",
      nvi: "En paz me acuesto y me duermo, porque solo tú, Señor, me haces vivir confiado."
    },
    {
      referencia: "Filipenses 4:6-7",
      rv: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.",
      nvi: "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios y denle gracias. Y la paz de Dios, que sobrepasa todo entendimiento, cuidará sus corazones y sus pensamientos en Cristo Jesús."
    },
    {
      referencia: "Mateo 6:34",
      rv: "Así que, no os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal.",
      nvi: "Por lo tanto, no se angustien por el mañana, el cual tendrá sus propios afanes. Cada día tiene ya sus problemas."
    },
    {
      referencia: "Isaías 26:3",
      rv: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.",
      nvi: "Al de carácter firme lo guardarás en perfecta paz, porque en ti confía."
    }
  ]
};
const tarjetaTengoMiedoDe: Tarjeta = {
  sentimiento: "Tengo miedo de...",
  versiculos: [
    {
      referencia: "Deuteronomio 31:6-8",
      rv: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos, porque Jehová tu Dios es el que va contigo; no te dejará, ni te desamparará. Y llamó Moisés a Josué, y le dijo en presencia de todo Israel: Esfuérzate y anímate; porque tú entrarás con este pueblo a la tierra... Y Jehová va delante de ti; él estará contigo, no te dejará ni te desamparará; no temas ni te intimides.",
      nvi: "Sean fuertes y valientes. No teman ni se asusten ante esas naciones, porque el Señor su Dios siempre los acompañará; nunca los dejará ni los abandonará. Luego Moisés llamó a Josué y le dijo delante de todo Israel: Sé fuerte y valiente... El Señor mismo marchará al frente de ti y estará contigo; nunca te dejará ni te abandonará. No temas ni te desanimes."
    },
    {
      referencia: "2 Timoteo 1:7",
      rv: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.",
      nvi: "Pues Dios no nos ha dado un espíritu de timidez, sino de poder, de amor y de dominio propio."
    },
    {
      referencia: "Salmos 55:22",
      rv: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo.",
      nvi: "Entrega tus cargas al Señor, y él cuidará de ti; no permitirá que el justo tropiece y caiga."
    },
    {
      referencia: "Lucas 12:32",
      rv: "No temáis, manada pequeña, porque a vuestro Padre le ha placido daros el reino.",
      nvi: "No tengas miedo, rebaño pequeño, porque el Padre ha querido darte el reino."
    },
    {
      referencia: "Salmos 118:6-7",
      rv: "Jehová está conmigo; no temeré lo que me pueda hacer el hombre. Jehová está conmigo entre los que me ayudan; por tanto, yo veré mi deseo en los que me aborrecen.",
      nvi: "El Señor está conmigo, no tengo miedo; ¿qué me puede hacer un simple mortal? El Señor está conmigo y me brinda su ayuda; veré derrotados a mis enemigos."
    },
    {
      referencia: "Salmos 56:3-4",
      rv: "En el día que temo, yo en ti confío. En Dios alabaré su palabra; en Dios he confiado, no temeré; ¿qué puede hacerme el hombre?",
      nvi: "Cuando siento miedo, pongo en ti mi confianza. Confío en Dios y alabo su palabra; confío en él y no siento miedo. ¿Qué puede hacerme un simple mortal?"
    }
  ]
};

const tarjetas: Tarjeta[] = [
  tarjetaNadieMeAma,
  tarjetaNoPuedoHacerlo,
  tarjetaNoSoyCapaz,
  tarjetaEstoyCansadonoTengoFuerzas,
  tarjetaMeSientoSoloOTriste,
  tarjetaNoValgoNada,
  tarjetaSoyUnError,
  tarjetaEstoyPreocupadoAnsioso,
  tarjetaTengoMiedoDe
];

export function getAllTarjetas() {
  return tarjetas;
}

export function getTarjetaByEmocion(emocion: string) {
  return tarjetas.find((e) => e.sentimiento === emocion);
}