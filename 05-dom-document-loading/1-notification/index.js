export default class NotificationMessage {
    static activeMessage
    element;
    timerId;
    constructor(message = "", { duration = 0, type = "" } = {}) {
        this.message = message;
        this.duration = duration
        this.type = type
        this.durationInSeconds = (duration / 1000) + 's';
    }


    show() {

        if (NotificationMessage.activeMessage) {
            NotificationMessage.activeMessage.destroy()
        }
        const element = document.createElement("div");
        element.innerHTML = this.template;
        const body = document.querySelector('body')
        this.element = element.firstElementChild
        body.appendChild(this.element)
        this.getMessageType()
        NotificationMessage.activeMessage = this
        this.timerId = setTimeout(() => {
            this.destroy()
        }, this.duration);
    }

    get template() {
        return `<div class="notification ${this.type}" style="--value:${this.durationInSeconds}">
      <div class="timer"></div>
      <div class="inner-wrapper">
        <div class="notification-header">${this.type}</div>
        <div class="notification-body">
        ${this.message}
        </div>
      </div>
    </div>`;
    }

    getMessageType() {
        const notification = document.querySelector('.notification')
        switch (this.type) {
            case "success":

                notification.classList.add("success");
                break;
            case "error":
                notification.classList.add("error");
                break;
            default:
                break;
        }
    }

    destroy() {
        clearTimeout(this.timerId)
        this.element.remove()

    }

}
