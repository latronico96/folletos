export type versiculo = {
    referencia: string;
    rv: string;
    nvi: string;
}

export type tarjeta = {
  emocion: string;
  versiculos: versiculo[]
}

export const tarjetas: tarjeta[] = [
  {
    "emocion": "Tristeza",
    "versiculos": [
      {
        "referencia": "Salmos 34:18",
        "rv": "Cercano está Jehová a los quebrantados de corazón; Y salva a los contritos de espíritu.",
        "nvi": "El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido."
      },
      {
        "referencia": "Mateo 5:4",
        "rv": "Bienaventurados los que lloran, porque ellos recibirán consolación.",
        "nvi": "Dichosos los que lloran, porque serán consolados."
      },
      {
        "referencia": "Isaías 41:10",
        "rv": "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
        "nvi": "Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra victoriosa."
      },
      {
        "referencia": "Juan 16:33",
        "rv": "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo.",
        "nvi": "Yo les he dicho estas cosas para que en mí hallen paz. En este mundo afrontarán aflicciones, pero ¡anímense! Yo he vencido al mundo."
      },
      {
        "referencia": "Apocalipsis 21:4",
        "rv": "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron.",
        "nvi": "Él les enjugará toda lágrima de los ojos. Ya no habrá muerte, ni llanto, ni lamento ni dolor, porque las primeras cosas han dejado de existir."
      }
    ]
  },
  {
    "emocion": "Felicidad",
    "versiculos": [
      {
        "referencia": "Filipenses 4:4",
        "rv": "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!",
        "nvi": "Alégrense siempre en el Señor. Insisto: ¡Alégrense!"
      },
      {
        "referencia": "Salmos 118:24",
        "rv": "Este es el día que hizo Jehová; Nos gozaremos y alegraremos en él.",
        "nvi": "Éste es el día en que el Señor actuó; regocijémonos y alegrémonos en él."
      },
      {
        "referencia": "Romanos 12:12",
        "rv": "Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración;",
        "nvi": "Alégrense en la esperanza, muestren paciencia en el sufrimiento, perseveren en la oración."
      },
      {
        "referencia": "Salmos 16:11",
        "rv": "Me mostrarás la senda de la vida; En tu presencia hay plenitud de gozo; Delicias a tu diestra para siempre.",
        "nvi": "Me has dado a conocer la senda de la vida; me llenarás de alegría en tu presencia, y de dicha eterna a tu derecha."
      },
      {
        "referencia": "Proverbios 17:22",
        "rv": "El corazón alegre constituye buen remedio; Mas el espíritu triste seca los huesos.",
        "nvi": "El corazón alegre es una buena medicina, pero el espíritu quebrantado seca los huesos."
      }
    ]
  },
  {
    "emocion": "Agotamiento",
    "versiculos": [
      {
        "referencia": "Mateo 11:28",
        "rv": "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
        "nvi": "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso."
      },
      {
        "referencia": "Isaías 40:31",
        "rv": "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
        "nvi": "Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán, y no se fatigarán; caminarán, y no se cansarán."
      },
      {
        "referencia": "2 Corintios 12:9",
        "rv": "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad.",
        "nvi": "Pero él me dijo: 'Te basta con mi gracia, pues mi poder se perfecciona en la debilidad.'"
      },
      {
        "referencia": "Salmos 73:26",
        "rv": "Mi carne y mi corazón desfallecen; Mas la roca de mi corazón y mi porción es Dios para siempre.",
        "nvi": "Podrá desfallecer mi cuerpo y mi espíritu, pero Dios fortalece mi corazón; él es mi herencia eterna."
      },
      {
        "referencia": "Jeremías 31:25",
        "rv": "Porque satisfaré al alma cansada, y saciaré a toda alma entristecida.",
        "nvi": "Yo refrescaré a los que están fatigados, y saciaré a los que se sienten debilitados."
      }
    ]
  },
  {
    "emocion": "Soledad",
    "versiculos": [
      {
        "referencia": "Deuteronomio 31:6",
        "rv": "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos, porque Jehová tu Dios es el que va contigo; no te dejará, ni te desamparará.",
        "nvi": "Sean fuertes y valientes. No teman ni se asusten ante esas naciones, porque el Señor su Dios siempre los acompañará; nunca los dejará ni los abandonará."
      },
      {
        "referencia": "Isaías 41:10",
        "rv": "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.",
        "nvi": "Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios."
      },
      {
        "referencia": "Salmos 25:16",
        "rv": "Mírame, y ten misericordia de mí, porque estoy solo y afligido.",
        "nvi": "Vuelve a mí tu rostro y tenme compasión, porque me siento solo y afligido."
      },
      {
        "referencia": "Mateo 28:20",
        "rv": "He aquí yo estoy con vosotros todos los días, hasta el fin del mundo.",
        "nvi": "Y les aseguro que estaré con ustedes siempre, hasta el fin del mundo."
      },
      {
        "referencia": "Salmos 147:3",
        "rv": "Él sana a los quebrantados de corazón, y venda sus heridas.",
        "nvi": "Él sana a los quebrantados de corazón, y les venda las heridas."
      }
    ]
  },
  {
    "emocion": "Culpa",
    "versiculos": [
      {
        "referencia": "1 Juan 1:9",
        "rv": "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.",
        "nvi": "Si confesamos nuestros pecados, Dios, que es fiel y justo, nos los perdonará y nos limpiará de toda maldad."
      },
      {
        "referencia": "Salmos 32:5",
        "rv": "Mi pecado te declaré, y no encubrí mi iniquidad... y tú perdonaste la maldad de mi pecado.",
        "nvi": "Te confesé mi pecado y no te oculté mi maldad. Me dije: «Voy a confesar mis transgresiones al Señor», y tú perdonaste mi maldad y mi pecado."
      },
      {
        "referencia": "Isaías 1:18",
        "rv": "Aunque vuestros pecados sean como la grana, como la nieve serán emblanquecidos.",
        "nvi": "Aunque sus pecados sean como escarlata, quedarán blancos como la nieve; aunque sean rojos como el carmesí, quedarán como la lana."
      },
      {
        "referencia": "Romanos 8:1",
        "rv": "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús.",
        "nvi": "Por lo tanto, ya no hay ninguna condenación para los que están unidos a Cristo Jesús."
      },
      {
        "referencia": "Miqueas 7:19",
        "rv": "Él volverá a tener misericordia de nosotros; sepultará nuestras iniquidades.",
        "nvi": "Tú volverás a compadecerte de nosotros; sepultarás nuestras iniquidades y arrojarás al fondo del mar todos nuestros pecados."
      }
    ]
  },
  {
    "emocion": "Depresion",
    "versiculos": [
      {
        "referencia": "Salmos 42:11",
        "rv": "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle.",
        "nvi": "¿Por qué te abates, alma mía? ¿Por qué te turbas dentro de mí? Espera en Dios, porque todavía lo alabaré."
      },
      {
        "referencia": "Isaías 40:29",
        "rv": "Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
        "nvi": "Él fortalece al cansado y acrecienta las fuerzas del débil."
      },
      {
        "referencia": "Salmos 9:9",
        "rv": "Jehová será refugio del pobre, refugio para el tiempo de angustia.",
        "nvi": "El Señor es refugio de los oprimidos, es su baluarte en momentos de angustia."
      },
      {
        "referencia": "Mateo 11:28-29",
        "rv": "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
        "nvi": "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso."
      },
      {
        "referencia": "2 Corintios 1:3-4",
        "rv": "Dios... nos consuela en todas nuestras tribulaciones.",
        "nvi": "Dios... nos consuela en todas nuestras tribulaciones, para que con el mismo consuelo podamos también nosotros consolar."
      }
    ]
  }
]

export function getAllTarjetas() {
  return tarjetas;
}

export function getTarjetaByEmocion(emocion: string) {
  return tarjetas.find((e) => e.emocion === emocion);
}
