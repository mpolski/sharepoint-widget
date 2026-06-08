import * as React from 'react';
import styles from './AiAgent.module.scss';
import type { IAiAgentProps } from './IAiAgentProps';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Icon } from '@fluentui/react/lib/Icon';

export default class AiAgent extends React.Component<IAiAgentProps, {}> {

  private _onAgentClick = (): void => {
    window.open('https://google.com', '_blank');
  };

  public render(): React.ReactElement<IAiAgentProps> {
    const { isDarkTheme } = this.props;

    return (
      <div className={styles.aiAgent} data-is-dark-theme={isDarkTheme ? "true" : "false"}>
        <div className={styles.card}>
          <div className={styles.glowEffect}></div>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <Icon iconName="Robot" className={styles.agentIcon} />
            </div>
            <h2 className={styles.title}>AI Agent</h2>
            <p className={styles.description}>
              Access your intelligent assistant to automate tasks, find information, and streamline your workflow.
            </p>
            <PrimaryButton 
              className={styles.actionButton}
              onClick={this._onAgentClick}
              text="Launch AI Agent"
              iconProps={{ iconName: 'NavigateExternalInline' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

