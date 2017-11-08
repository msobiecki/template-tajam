import dispatcher from "../../../dispatcher";

export function getFooter() {
	// axios("http://someurl.com/somedataendpoint").then((data) => {
	// 	console.log("got the data!", data);
	// })

	dispatcher.dispatch({ type: "FETCH_FOOTER" });
	setTimeout(() => {
		dispatcher.dispatch({
			type: "RECEIVE_FOOTER", data: {
				// TODO DATA
			}
		});
	}, 1000);
}