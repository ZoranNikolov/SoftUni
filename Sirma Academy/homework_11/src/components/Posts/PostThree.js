import { Link } from "react-router-dom";
import logo from "../../resources/images/logo_arrow_back.svg";
import belogradchik from "../../resources/images/belogradchick_rocks_1200.jpg";
import { PostHeading } from "./PostHeading";
import { PostBody } from "./PostBody";

export const PostThree = () => {
	const paragraphs = [
		`Когато не колонизира Марс, не купува Twitter и не произвежда
		електрически коли, Илън Мъск обича да си почива в българския
		Северозапад. Конкретно в Белоградчик, където екипът му вече е
		запазил маса в ресторант ONA за 23 април. Всъщност не сме
		сигурни за нищо от горенаписаното, но трябва да признаем, че
		досега светът никога не е бил толкова близо до възможността
		най-богатият човек на света да пие видинска ракия.`,
		`Историята накратко звучи така: На 21 ноември Twitter акаунтът
		Anc_Aesthetics публикува снимка на Белоградчишките скали, дело
		на фотографа Владислав Терзийски. Ден по-късно Мъск, който
		откакто официално стана собственик на Twitter, не е излизал от
		социалната мрежа, отговори на публикацията със
		<em>"Сигурен съм, че това беше в Elden Ring"</em> - последното,
		ако ви обърква, е име на хитова видеоигра от тази година. Без да
		отнемаме вниманието нито от красотата на снимката, нито на
		самите скали, трябва да отбележим, че кадърът е силно "пипнат" и
		действително може да бъде сбъркан за видеоигра.`,
		`Отговорът на Мъск подлуди българската част от Twitter. Всички се
		втурнаха да обясняват, че това всъщност е Белоградчик - не само
		редови потребители, но и профилът на общинския съвет на
		Белоградчик и служебният министър на туризма Илин Димитров,
		преди това депутат от "Продължаваме промяната" (а и почти адаш
		на Мъск).`,
		`Ден по-късно, в сряда, Димитров обяви, че акцията е успешна:
		Илън Мъск идва в България. В същия момент и ресторант ONA в
		белоградчишкото село Стакевци обяви, че човек с имейл към SpaceX
		е запазил маса за 23 април и е поискал повече информация какво
		има в региона.`,
		`<em>"Мъск ще посети Белоградчик: шега, рекламен трик или
		истина?"</em>
		, пита bTV в обедната си емисия, след като през сутрешния блок
		вече е минал Владислав Терзийски. "Наистина ли Мъск пристига? В
		ONA не знаят от кого е резервацията", пише OFFNews в опит да
		успокои настървеното настроение на колегите си.`,
		`Най-доброто включване обаче със сигурност е на "Клуб Z", които,
		вместо да мислят ще дойде ли или не, развиха хипотеза какво би
		се случило на Мъск, ако пристигне във Видинско. "Мале, тоа че го
		прекинат!", възкликва авторът Стефан Миланов, който е и родом от
		Северозапада. Както става ясно от текста, ако ще идва, Мъск
		най-добре да е в ролята си на шеф на Twitter, а не на Tesla,
		защото автонавиците на местното население едва ли ще му харесат.`,
		`<em>"Тук на почит е конвенционалното гориво за ДВГ. В частност
		нафтата. В частност откраднатата нафта"</em>, пише Миланов. 
		Ако можем да добавим - пътищата на север от
		София и без това са по-скоро за совалка на SpaceX, отколкото за
		кола на Tesla.`,
		]
	return (
		<>
			<Link to="/postortable">
				<img src={logo} width="25" title="Go back" alt="Arrow back" />
			</Link>
			<PostHeading
				title="Илън Мъск: От Twitter, през Марс до Белоградчик"
				quote="Илън Мъск никога не е бил толкова близо до това да посети
				българския Северозапад, но какво ще види е друг въпрос"
				imageSource={belogradchik}
				altText="A picture of Belogradchick rocks"
				imageWidth="750"
			/>
			<PostBody
				paragraphs={paragraphs}
			/>
		</>
	);
};
