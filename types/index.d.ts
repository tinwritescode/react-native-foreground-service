export default VIForegroundService;
declare class VIForegroundService {
    static _serviceInstance: any;
    static getInstance(): any;
    _listeners: Map<any, any>;
    /**
     * Create notification channel for foreground service
     *
     * @param {NotificationChannelConfig} channelConfig - Notification channel configuration
     * @return Promise
     */
    createNotificationChannel(channelConfig: any): Promise<any>;
    /**
     * Start foreground service
     * @param {NotificationConfig} notificationConfig - Notification config
     * @return Promise
     */
    startService(notificationConfig: any): Promise<any>;
    /**
     * Stop foreground service
     *
     * @return Promise
     */
    stopService(): Promise<any>;
    /**
     * Adds a handler to be invoked when button on notification will be pressed.
     * The data arguments emitted will be passed to the handler function.
     *
     * @param event - Name of the event to listen to
     * @param handler - Function to invoke when the specified event is emitted
     */
    on(event: any, handler: any): void;
    /**
     * Removes the registered `handler` for the specified event.
     *
     * If `handler` is not provided, this function will remove all registered handlers.
     *
     * @param event - Name of the event to stop to listen to.
     * @param handler - Handler function.
     */
    off(event: any, handler: any): void;
    /**
     * @private
     */
    private _emit;
    /**
     * @private
     */
    private _VIForegroundServiceButtonPressed;
}
