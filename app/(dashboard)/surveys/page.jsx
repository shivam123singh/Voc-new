import { PageWrapper } from '@/components/wrapper';
import { EmptyPlaceholder } from '@/components/empty-placeholder';
import { CreateSurveyDialog } from '@/components/create-survey-dialog';
import DataTable from '@/components/data-table';

import { columns } from './columns';

import { surveyTableConfig } from '@/config/table-config';

const Survey = () => {
  return (
    <PageWrapper className="h-full">
      {surveyTableConfig.surveyDummy.length > 0 ? (
        <>
          <div className="flex justify-end mb-8">
            <div>
              <CreateSurveyDialog btnSize="sm" />
            </div>
          </div>
          <DataTable columns={columns} data={surveyTableConfig.surveyDummy} />
        </>
      ) : (
        <EmptyPlaceholder className="h-full">
          <EmptyPlaceholder.Icon name="documents" />
          <EmptyPlaceholder.Title>
            You don’t have any survey
          </EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Create a survey to get feedback from customers.
          </EmptyPlaceholder.Description>
          <CreateSurveyDialog />
        </EmptyPlaceholder>
      )}
    </PageWrapper>
  );
};

export default Survey;
