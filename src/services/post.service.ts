import axios from "axios";
import { ROUTE_API } from "./index.route";
import { PATH_ENUM } from "../router/path";
import { myAxios } from "../config/axios.config";
import { UserInfoAll as AuthorInfo } from "./info.service";
import { InterfaceCustomHttp } from "../interface/http.global";
import { BASE_API_ROUTE } from "../constant/app.constant";

export interface PostInterface {
	author: AuthorInfo;
	author_id: string;
	content: string;
	created_at: Date;
	description: string;
	id: number;
	thumbnail: Date;

	title: string;
	updated_at: Date;
}
export const postsService = () => {
	return myAxios.get<InterfaceCustomHttp<PostInterface>>(
		`${BASE_API_ROUTE}${ROUTE_API.POST}`
	);
};

export const deletePostService = (id: PostInterface[`id`]) => {
	return myAxios.delete(`${ROUTE_API.DELETE_POST}/${id}`);
};

export const creatPostService = (data: PostSubmit) => {
	return myAxios.post(`${ROUTE_API.CREAT_POST}`, data);
};

export const updatePostService = (id: number, data: PostSubmit) => {
	return myAxios.patch(`${ROUTE_API.UPDATE_POST}/${id}`, data);
};

export type PostSubmit = Pick<
	PostInterface,
	"title" | "description" | "content"
>;
