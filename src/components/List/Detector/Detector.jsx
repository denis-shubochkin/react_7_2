import New from '../New/New';
import Popular from '../Popular/Popular';

export default function Detector(Component) {
    return function(props) {
      if (props.views<100)
      {
        let HOC = New(Component);
        return <HOC {...props}/>
      }
      if(props.views>1000)
      {
        let HOC = Popular(Component);
        return <HOC {...props}/>
      }
      else
      {
          return <Component {...props} />
      }
    }
  }