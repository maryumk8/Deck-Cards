import { handlePost } from "../services";

export const handlePostRandom = async (info) => {
    try {
        const res = await handlePost(info);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
