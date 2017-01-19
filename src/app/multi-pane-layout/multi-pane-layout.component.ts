/**
 * Component that has three horizontal separated sections
 *
 * @example
 * <multi-pane-layout>
 *   <first-pane>
 *       Content
 *   </first-pane>
 *   <second-pane>
 *       Content
 *   </second-pane>
 *   <third-pane>
 *       Content
 *   </third-pane>
 * </multi-pane-layout>
 */

import { Component, ViewChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonInputComponent } from './common/bd-input/bd-input.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SwitchState } from '../shared/enums/switchState';
import { BdResizeContainerComponent } from '../shared/components/bd-resizer';
import { AppState } from '../app.service';

@Component({
    selector: 'multi-pane-layout',
    templateUrl: './multi-pane-layout.component.html',
    styleUrls: [
        './multi-pane-layout.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiPaneLayoutComponent {

    private currentState: SwitchState = SwitchState.AllPanesVisible;
    private switchStateEnum: any = SwitchState;
    private resizerWidth = 20;
    private resizerMin = 320;
    private resizerDirection = 'horizontal';
    private resizeSecondPane = null;

    private widths = {
        0: 0,
        1: 100,
        2: 50,
        3: 33.33333333
    };

    private panesState = [
        SwitchState.FirstPaneVisible,
        SwitchState.SecondPaneVisible,
        SwitchState.ThirdPaneVisible
    ];

    @ViewChildren(BdResizeContainerComponent) private bdResizeComponents: QueryList<BdResizeContainerComponent>;

    constructor(
        public appState: AppState,
        private cdr: ChangeDetectorRef) {
    }

    ngDoCheck(changes) {
        if (this.currentState !== this.appState.get('switchState')) {
            this.setCurrentState(this.appState.get('switchState'));
            this.cdr.markForCheck();
            setTimeout(() => this.resizeSecondPane = this.getSecondPane() , 0);
        }
    }

    ngAfterViewInit() {
        if (isNaN(this.currentState)) {
            this.setCurrentState(this.switchStateEnum.AllPanesVisible);
        }

        this.resizeSecondPane = this.getSecondPane();
    }

    isVisible(state: SwitchState) {
        return !!( this.currentState & state);
    }

    setCurrentState(state: SwitchState = SwitchState.AllPanesVisible) {
      this.currentState = state;
    }

    getWidth() {
        const columnsCount = this.panesState.filter(value => {
            return !!(value & this.currentState);
        }).length;

        return this.widths[columnsCount];
    }

    getSecondPane() {
        if (this.bdResizeComponents) {
            const result = this.bdResizeComponents.filter(bdResizeComponent => !bdResizeComponent.element.nativeElement.attributes['hidden']);
            return result.length ? result[1] : null;
        }

        return null;
    }
}
