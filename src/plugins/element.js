import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Row, Col, Card, Input,
  Button, Backtop, Icon, Link,
  Calendar, Pagination, Message,
  Breadcrumb, BreadcrumbItem, Form, FormItem,
  Popover, Carousel, CarouselItem, Tooltip,
  Timeline, TimelineItem, Table, TableColumn,
  Cascader, Radio, RadioGroup, Tag,
  Tabs, TabPane, Progress, Divider, Alert } from 'element-ui'

// 挂载全局属性
Vue.prototype.$msg = Message

Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Input)
Vue.use(Button)
Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Link)
Vue.use(Calendar)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Popover)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tooltip)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Cascader)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Progress)
Vue.use(Divider)
Vue.use(Alert)
