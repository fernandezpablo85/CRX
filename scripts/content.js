alert(Wi.hasToken());
if(!Wi.hasToken()){
	Wi.authenticate();
}
Wi.createBCards();