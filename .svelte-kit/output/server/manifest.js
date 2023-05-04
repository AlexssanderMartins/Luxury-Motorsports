export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Quicksand.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.5dc96de1.js","app":"_app/immutable/entry/app.7ad0a04f.js","imports":["_app/immutable/entry/start.5dc96de1.js","_app/immutable/chunks/index.7cf8fd15.js","_app/immutable/chunks/singletons.a40828fa.js","_app/immutable/chunks/index.71f4be7d.js","_app/immutable/entry/app.7ad0a04f.js","_app/immutable/chunks/index.7cf8fd15.js"],"stylesheets":[],"fonts":[]},
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
