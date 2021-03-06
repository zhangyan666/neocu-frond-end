
import classnames from 'classnames';
import ProgressBar from './ProgressBar';
import './Progress.less';

class Progress extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['normal', 'primary', 'info', 'warning', 'success', 'danger']),
    size: React.PropTypes.oneOf(['large', 'small']),
    striped: React.PropTypes.bool,
    active: React.PropTypes.bool,
    round: React.PropTypes.bool,
    dynamic: React.PropTypes.bool,
    percent: React.PropTypes.number,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    type: 'normal',
    striped: false,
    active: false,
    round: false,
    dynamic: false,
    percent: 30,
  };

  render() {
    const {className, striped, size, active, round, type, percent, dynamic} = this.props;    
    const clazzName = classnames({
      "neo-progress": true,
      "neo-progress-striped": !!striped,
      "neo-progress-round": !!round,
      "active": !!active,
      [`neo-progress-${size}`]: !!size,
      [`${className}`]: !!className,
    });
    return (
      <div className={clazzName} >
        <ProgressBar type={type} percent={percent} dynamic={dynamic} />
      </div>
    );
  }
}

export default Progress;