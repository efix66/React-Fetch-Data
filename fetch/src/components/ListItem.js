import React from "react";

const ListItem = ({ item }) => {
	return <li>{JSON.stringify(item)}</li>; //Printeaza intregul obiect
};

export default ListItem;
