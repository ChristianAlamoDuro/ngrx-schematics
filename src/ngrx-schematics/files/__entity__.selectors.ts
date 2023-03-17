import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { <%=entity%>Adapter } from './<%=entity%>.reducer';
import { State as RootState } from '@core/store';
import { <%=classify(entity)%>State } from './<%=entity%>.reducer';

export const select<%=classify(entity)%>State = createFeatureSelector<RootState, <%=classify(entity)%>State>('<%=entity%>');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = <%=entity%>Adapter.getSelectors();

export const selectAll<%=pluralize(classify(entity))%> = createSelector(
    select<%=classify(entity)%>State,
    selectAll
);

export const select<%=classify(entity)%>Entities = createSelector(
    select<%=classify(entity)%>State,
    selectEntities
);

export const select<%=classify(entity)%> = createSelector(
    select<%=classify(entity)%>Entities,
    (<%=pluralize(entity)%>: Dictionary<<%=classify(entity)%>>, { <%=entity%>Id }: { <%=entity%>Id: string }) => <%=pluralize(entity)%>[<%=entity%>Id]
);