## debuger for angular mobile

```
移动端。默认。累计长按每3秒显示调试
```

```
yarn add meepo-debuger
```

```ts
import { DebugerModule } from 'meepo-debuger';

@NgModule({
  imports: [
    DebugerModule
  ]
})
export class AppModule { }
```

```html
<div class="main" [debuger]="'3'">
    <div class="empty">
        长按3秒触发调试
    </div>
</div>
```