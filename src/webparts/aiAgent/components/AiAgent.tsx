import * as React from 'react';
import type { IAiAgentProps } from './IAiAgentProps';
import styles from './AiAgent.module.scss';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export default class AiAgent extends React.Component<IAiAgentProps, {}> {

  private _onAgentClick = (): void => {
    window.open(this.props.redirectUrl, '_blank');
  };


  public render(): React.ReactElement<IAiAgentProps> {
    const { isDarkTheme } = this.props;

    return (
      <div className={styles.aiAgent} data-is-dark-theme={isDarkTheme ? "true" : "false"}>
        <div className={styles.card}>
          <div className={styles.glowEffect}></div>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <img src={require('../assets/agent-icon.svg')} className={styles.customIcon} alt="Agent Icon" />
            </div>




            <p className={styles.description}>
              {this.props.description}
            </p>

            <PrimaryButton 
              className={styles.actionButton}
              onClick={this._onAgentClick}
              text="HR Agent"
              iconProps={{ iconName: 'NavigateExternalInline' }}
            />

          </div>
        </div>
      </div>
    );
  }
}

