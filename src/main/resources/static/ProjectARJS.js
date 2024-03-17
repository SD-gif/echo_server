function sendCoordinates() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    const data = {
        latitude: latitude,
        longitude: longitude
    };
    console.log('데이터 전송 시작');
    fetch('http://localhost:8080/echo_coordinates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('응답 실패');
            }
            return response.json();
        })
        .then(jsonData => {
            console.log('데이터 수신 성공:', jsonData);
            displayEchoResponse(jsonData)   // 에코데이터 출력
        })
        .catch(error => {
            console.error('데이터 전송 중 에러 발생:', error);
        });
        
        console.log('에코 서버에 요청을 보냅니다. URL:', 'http://localhost:8080/echo_coordinates1');
	fetch('http://localhost:8080/echo_coordinates', {
    	method: 'POST',
    	headers: {
        	'Content-Type': 'application/json'
    	},
    	body: JSON.stringify(data)
})

}

function displayEchoResponse(responseData) {
    const echoResponseDiv = document.getElementById('echoResponse');
    echoResponseDiv.innerHTML = `<p>Echo Response:</p>
                                 <p>Latitude: ${responseData.latitude}</p>
                                 <p>Longitude: ${responseData.longitude}</p>`

}