/// <reference types="vite/client" />
declare module '*.hbs' {
	const func: (context: unknown) => string;
	export default func;
}
