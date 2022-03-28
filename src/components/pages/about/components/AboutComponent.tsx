import { useSelector } from 'react-redux';
import { HeadingSecondary } from '../../../layouts/heading/HeadingLayouts';

interface State {
	About: any;
}

export const AboutComponent = () => {
	const { aboutMe } = useSelector((state: State) => state.About);
	const {
		nombre,
		edad,
		email,
		direccion,
		freelance,
		skill,
		lenguaje,
		añosExperiencia,
		clientesFelices,
		proyectosCompletados
	} = aboutMe;

	return (
		<>
			<HeadingSecondary title="información personal" />
			<section className="about">
				<div className="row">
					<div className="info-container">
						<div className="box-container">
							<div className="box">
								<h3>
									{' '}
									<span>Nombre : </span> {nombre}{' '}
								</h3>
								<h3>
									{' '}
									<span>Edad : </span> {edad} años
								</h3>
								<h3>
									{' '}
									<span>Email : </span> {email}{' '}
								</h3>
								<h3>
									{' '}
									<span>Dirección : </span> {direccion}{' '}
								</h3>
							</div>
							<div className="box">
								<h3>
									{' '}
									<span>Freelance : </span> {freelance}{' '}
								</h3>
								<h3>
									{' '}
									<span>Habilidad : </span> {skill}{' '}
								</h3>
								<h3>
									{' '}
									<span>Experiencia : </span> {añosExperiencia} años{' '}
								</h3>
								<h3>
									{' '}
									<span>Lenguaje : </span> {lenguaje}{' '}
								</h3>
							</div>
						</div>
					</div>
					<div className="count-container">
						<div className="box">
							<h3>+{añosExperiencia}</h3>
							<p>años de experiencia</p>
						</div>
						<div className="box">
							<h3>+{clientesFelices}</h3>
							<p>clientes felices</p>
						</div>
						<div className="box">
							<h3>+{proyectosCompletados}</h3>
							<p>proyectos completados</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
