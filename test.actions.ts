console.log('Hi test Frontend Rules');
import { createAction } from '@ngrx/store';

export const gettest = createAction('[test] Get test');

export const gettestSuccessfully = createAction(
    '[test] Get test successfully',
    props<{ test: Test[] }>()
);