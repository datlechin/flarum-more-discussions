import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

const settingPrefix = 'datlechin-more-discussions.';
const localePrefix = 'datlechin-more-discussions.admin.settings.';

function trans(key: string) {
  return app.translator.trans(localePrefix + key);
}

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: settingPrefix + 'block_name',
      label: trans('block_name_label'),
      help: trans('block_name_help'),
      type: 'text',
    }))
    .setting(() => ({
      setting: settingPrefix + 'discussion_limit',
      label: trans('discussion_limit_label'),
      help: trans('discussion_limit_help'),
      type: 'number',
    }))
    .setting(() => ({
      setting: settingPrefix + 'filter_by',
      label: trans('filter_by_label'),
      help: trans('filter_by_help'),
      type: 'select',
      options: {
        '': trans('filter_dropdown.latest'),
        '-commentCount': trans('filter_dropdown.top'),
        '-createdAt': trans('filter_dropdown.newest'),
        createdAt: trans('filter_dropdown.oldest'),
        '-hotness': trans('filter_dropdown.hot'),
        '-votes': trans('filter_dropdown.votes'),
      },
      default: '',
    }))
    .setting(() => ({
      setting: settingPrefix + 'is_related',
      label: trans('discussion_related_label'),
      help: trans('discussion_related_help'),
      type: 'boolean',
    })),
];
