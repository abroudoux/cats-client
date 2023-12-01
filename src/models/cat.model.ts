export type CatProps = {
    _id : string;
    name : string;
    color : string;
    onCatDelete : () => void;
    onCatUpdate : () => void;
};

export interface Cat {
	_id : string,
	name : string,
	color : string
};