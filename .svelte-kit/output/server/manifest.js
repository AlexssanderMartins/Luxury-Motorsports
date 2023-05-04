export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Quicksand.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.e9427bc2.js","app":"_app/immutable/entry/app.9797b8df.js","imports":["_app/immutable/entry/start.e9427bc2.js","_app/immutable/chunks/index.7cf8fd15.js","_app/immutable/chunks/singletons.45af2494.js","_app/immutable/chunks/index.71f4be7d.js","_app/immutable/entry/app.9797b8df.js","_app/immutable/chunks/index.7cf8fd15.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
