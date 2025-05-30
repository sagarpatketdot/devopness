"""
Devopness API Python SDK - Painless essential DevOps to everyone

Note:
    This is auto generated by OpenAPI Generator.
    https://openapi-generator.tech
"""

from typing import (
    Required,
    TypedDict,
    Union,
)

from .. import DevopnessBaseModel
from .triggered_actions import TriggeredActions, TriggeredActionsPlain
from .user_environment_stats import UserEnvironmentStats, UserEnvironmentStatsPlain
from .user_project_stats import UserProjectStats, UserProjectStatsPlain
from .user_team_stats import UserTeamStats, UserTeamStatsPlain


class UserActivity(DevopnessBaseModel):
    """
    UserActivity

    Attributes:
        projects (UserProjectStats):
        environments (UserEnvironmentStats):
        teams (UserTeamStats):
        triggered_actions (TriggeredActions):
    """

    projects: UserProjectStats
    environments: UserEnvironmentStats
    teams: UserTeamStats
    triggered_actions: TriggeredActions


class UserActivityPlain(TypedDict, total=False):
    """
    Plain version of UserActivity.
    """

    projects: Required[
        Union[
            UserProjectStats,
            UserProjectStatsPlain,
        ]
    ]
    environments: Required[
        Union[
            UserEnvironmentStats,
            UserEnvironmentStatsPlain,
        ]
    ]
    teams: Required[
        Union[
            UserTeamStats,
            UserTeamStatsPlain,
        ]
    ]
    triggered_actions: Required[
        Union[
            TriggeredActions,
            TriggeredActionsPlain,
        ]
    ]
