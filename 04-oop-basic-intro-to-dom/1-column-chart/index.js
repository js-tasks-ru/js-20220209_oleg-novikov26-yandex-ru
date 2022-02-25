export default class ColumnChart {

    subElements = {};
    chartHeight = 50;
    constructor({
        data = [],
        label = '',
        link = '',
        value = 0,
        formatHeading = data => data
    } = {}) {
        this.data = data;
        this.label = label;
        this.link = link;
        this.value = formatHeading(value);

        this.render();
    }

    render() {
        const element = document.createElement('div')
        element.innerHTML = this.template
        this.element = element.firstElementChild
        this.data.length ?
            this.element.classList.remove('column-chart_loading') : this.element.classList.add('column-chart_loading')


        this.subElements = this.getSubElements();

    }
    getColumnBody() {
        const maxValue = Math.max(...this.data);
        const scale = this.chartHeight / maxValue;

        return this.data
            .map(item => {
                const percent = (item / maxValue * 100).toFixed(0);

                return `<div style="--value: ${Math.floor(item * scale)}" data-tooltip="${percent}%"></div>`;
            })
            .join('');


    }
    getSubElements() {
        const result = {};
        const elements = this.element.querySelectorAll('[data-element]');

        for (const subElement of elements) {
            const name = subElement.dataset.element;

            result[name] = subElement;
        }

        return result;
    }
    getLinkTemplate() {
        return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
    }
    get template() {

        return `<div class="dashboard__chart_orders">
            <div class="column-chart" style="--chart-height: 50">
                <div class="column-chart__title">
                    Total ${this.label}
                    ${this.getLinkTemplate()}
                </div>
                <div class="column-chart__container">
                    <div data-element="header" class="column-chart__header">${this.value}</div>
                    <div data-element="body" class="column-chart__chart">
                    ${this.getColumnBody()}
                    </div>
                </div>
            </div>
        </div>
        `
    }
    update(data) {
        this.data = data
        this.subElements.body.innerHTML = this.getColumnBody(data);
    }
    remove() {
        if (this.element) {
            this.element.remove();
        }
    }

    destroy() {
        this.remove();
        this.element = null;
        this.subElements = {};
    }

}
