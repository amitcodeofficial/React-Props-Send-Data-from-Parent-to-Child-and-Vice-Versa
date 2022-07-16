const SnackAuth = {
  default: true,
  setDefault(){
    this.default=true;
  },
  removeDefault(){
    this.default=false;
  },
  getDefault(){
    return this.default;
  }
}