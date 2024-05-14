class SingletonAuthenticator {
    constructor() {
      if (!SingletonAuthenticator.instance) {
        this._token = Math.random().toString(36).substring(2)
        SingletonAuthenticator.instance = this;
      }
  
      return SingletonAuthenticator.instance;
    }
  
    getToken() {
      return this._token;
    }
  }
  

  const auth1 = new SingletonAuthenticator();
  const auth2 = new SingletonAuthenticator();
  
  console.log(auth1 === auth2);
  
  console.log(auth1.getToken());
  console.log(auth2.getToken());