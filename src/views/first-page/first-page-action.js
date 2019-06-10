// types of action
const Types = {
    SHOW_TEXT: "SHOW_TEXT",
  };
  // actions
  const showText = () => {
    console.log('veio auqi')
    return{
    type: Types.SHOW_TEXT,
  }
};
  
  export default {
    showText,
    Types
  };