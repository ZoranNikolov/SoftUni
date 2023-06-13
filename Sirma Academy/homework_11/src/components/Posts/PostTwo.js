import { Link } from "react-router-dom";
import logo from "../../resources/images/logo_arrow_back.svg";
import lightbulb from "../../resources/images/lightbulb_1920.jpg";
import { PostHeading } from "./PostHeading";
import { PostBody } from "./PostBody";

export const PostTwo = () => {
	const paragraphs = [
		`На връх Великден на 16 април 1922 във Варна се ражда момче.
		Кръщават го Илия. Илия Георгиев Вълков е роден в голяма къща на
		знатна фамилия. Баща му Георги Кожухаров е бил син на известен
		търговец, а майка му - добре образована жена, завършила френски
		колеж.`,
		`От ранна възраст малкият Илия е проявявал интерес към техниката
		и ходел в работилницата на баща си да гледа как работят
		машините. Бил отличен ученик и първенец на класа си.`,
		`Въпреки волята на баща си той започва да учи в търговска
		гимназия, макар винаги е бил привлечен от техниката. Още на
		невръстна възраст започнал да строи апарати, които за учудване
		на всички работели.`,
		`Обичал фантастичната литература и се научил да чете още на 5
		години, а да пише на 6, а любимият му писател бил фантастът Жул
		Верн, разказващ в своите романи за най-различни невиждани
		дотогава апарати и изобретения. Един ден докато Илия четял
		<cite>„Тайнственият остров“</cite>, огромно впечатление му
		направила реплика на главния герой:
		<em>
		„Един ден водата ще бъде разложена на съставните си елементи
		и те ще се превърнат в мощна управляема сила“.
		</em>`,
		` променя завинаги бъдещия `,
		`<em>„Да приятели, мисля, че един ден водата ще се употребява
		като гориво и нейните съставни части - водородът и
		кислородът ще се използват като източник на светлина и
		топлина, много по-могъщ от въглищата. Въглищата на бъдещето
		– това е водата“{" "}</em>. Тези думи на Жул Верн, написани през 1895г, 
		буквално обсебват Илия Вълков.`,
		`След като споделя идеята си вкъщи, всички започват да му се
		присмиват, споделя неговата внучка Радослава Шумкова във филма
		от поредицата на bTV “Неразказно в историята“.`,
		`Наричат го фантазьор. Фантазьор, мечтател - такъв понякога е
		изглеждал и пред съучениците си от търговската гимназия, която
		той завършва с отличие. Въпреки това Илия не става търговец.`,
		`През 1941 г. България като страна от тристранния пакт изпраща
		войници в Западна Македония, в Тасос и Самотраки, а Илия отбива
		военната си служба на Самотраки като част от 22-ри полк.`,
		`След войната в България идва и новият политически строй. След
		възприемането на новите комунистически порядки и ценности,
		семейството на Илия е квалифицирано като буржоаазно (т.е враг) и
		преживява огромни материални сътресения. Отнемат работилниците,
		магазините и разграбват имуществото и ценните предмети от дома
		му.`,
		`Малко след тези събития Илия постъпва в Държавната политехника
		във Факултета по електроинженерство. По това време започва и
		паралелно работа в Каварна и един ден, докато пътува във влака,
		среща момиче, което отива към фабриката, в която работи. С
		пъстри очи и гъста черна коса, младата дама впечатлява Илия.`,
		]
	return (
		<>
			<Link to="/postortable">
				<img src={logo} width="25" title="Go back" alt="Arrow back" />
			</Link>
			<PostHeading
				title="Българинът, който превърна водата в гориво, и каква е тайната
				намеса на ЦРУ"
				quote='"Всички предимства на Брауновия газ не се ползват в
				България, а това е българско изобретение и той го е защитил
				като такова в Америка."'
				author="инж. Цвети Цветков"
				imageSource={lightbulb}
				altText="New idea"
				imageWidth="750"
			/>
			<PostBody
				contentHeader="Малкият гений"
				paragraphs={paragraphs}
			/>
		</>
	);
};