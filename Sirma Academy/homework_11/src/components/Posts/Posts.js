import { Link } from "react-router-dom";
import logo from "../../resources/images/logo_arrow_back.svg";

export const Posts = () => {
	return (
		<>
			<Link to="/postortable">
				<img
					src={logo}
					width="25"
					title="Go back"
					alt="Arrow back"
				/>
			</Link>
			<p>Можете да разгледате нашите статии на следните адреси:</p>
			<ul>
				<li>
					<Link to="/postone">
						Биткойн: Анализатор прогнозира 75% скок – ето кога
					</Link>
				</li>
				<li>
					<Link to="/posttwo">
						Българинът, който превърна водата в гориво, и каква е
						тайната намеса на ЦРУ
					</Link>
				</li>
				<li>
					<Link to="/postthree">
						Илън Мъск: От Twitter, през Марс до Белоградчик
					</Link>
				</li>
				<li>
					<Link to="/postfour">
						Зелена комета минава край Земята за първи път от 50 000
						години
					</Link>
				</li>
			</ul>
		</>
	);
};
