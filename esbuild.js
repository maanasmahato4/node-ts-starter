import esbuild from 'esbuild';

esbuild.build({
	entryPoints: ['./src/*'],
	outdir: './dist',
	bundle: true,
	platform: 'node',
});
