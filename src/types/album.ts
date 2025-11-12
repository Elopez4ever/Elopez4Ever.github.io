/**
 * 相册照片接口
 */
export interface Photo {
	id: string; // 照片唯一标识
	src: string; // 照片源路径
	thumbnail?: string; // 缩略图路径（可选）
	alt: string; // 图片描述
	title?: string; // 照片标题（可选）
	description?: string; // 照片详细描述（可选）
	tags?: string[]; // 标签列表
	date?: string; // 拍摄日期
	location?: string; // 拍摄地点（可选）
	width?: number; // 图片宽度（可选）
	height?: number; // 图片高度（可选）
	camera?: string; // 相机型号（可选）
	lens?: string; // 镜头型号（可选）
	settings?: {
		// 拍摄设置（可选）
		iso?: number;
		aperture?: string;
		shutter?: string;
		focalLength?: string;
	};
}

/**
 * 相册组接口
 */
export interface AlbumGroup {
	id: string; // 相册唯一标识
	title: string; // 相册标题
	description: string; // 相册描述
	cover: string; // 封面图片路径
	date: string; // 创建日期
	location?: string; // 相册地点（可选）
	tags?: string[]; // 相册标签
	layout?: "grid" | "masonry" | "justified"; // 布局方式
	columns?: number; // 网格列数
	photos: Photo[]; // 照片列表
}
